const qiniu = require("qiniu");
const path = require("path");
const fs = require("fs");
const args = process.argv.slice(2);
const env = args[0];
const mime = require("mime-types");
const yaml = require("yaml");

console.log(">> env: ", env);

const setting = {
  develop: {
    name: "TooqingStudioDEV",
    output: "develop",
    bucket: "pixelpai-dev",
    qiniu: "https://osd-dev.tooqing.com",
  },
  release: {
    name: "TooqingStudioALPHA",
    output: "release",
    bucket: "pixelpai-alpha",
    qiniu: "https://osd-alpha.tooqing.com",
  },
  production: {
    name: "TooqingStudio",
    output: "production",
    bucket: "pixelpai",
    qiniu: "https://osd.tooqing.com",
  },
};

const mac = new qiniu.auth.digest.Mac(setting.accessKey, setting.secretKey);

const options = {
  scope: setting[env].bucket,
};
const putPolicy = new qiniu.rs.PutPolicy(options);
const qiniuToken = putPolicy.uploadToken(mac);

const yamlFile = path.join(__dirname, `${env}/latest.yml`);
const yamlContent = yaml.parse(fs.readFileSync(yamlFile, { encoding: "utf8" }));
console.log("🚀 ~ file: upload-app.js ~ line 42 ~ yamlContent", yamlContent);

const appKey = `editor/${yamlContent.path}`;
const appUri = path.join(__dirname, `${env}/${yamlContent.path}`);

const config = new qiniu.conf.Config();
const formUploader = new qiniu.form_up.FormUploader(config);
const putExtra = new qiniu.form_up.PutExtra();
putExtra.mimeType = mime.lookup(appUri);
// 文件上传
formUploader.putFile(qiniuToken, appKey, appUri, putExtra, function (respErr, respBody, respInfo) {
  if (respErr) {
    console.log("Upload Failed: ", respErr);
  }
  if (respInfo.statusCode == 200) {
    console.log("Upload app Success!");
  }
});
