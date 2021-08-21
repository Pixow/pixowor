const zipFolder = require("zip-folder");
const unzip = require("unzip-stream");
const qiniu = require("qiniu");
import { app } from "electron";
import * as path from "path";
import * as fs from "fs";
import * as fsa from "fs-extra";
import * as util from "util";
import * as wget from "wget-improved";

import { Channels } from "../../config/ipc_channel";
import { isFileExists, readFileSync } from "../../utils/io";
import { listDir } from "@launcher/utils/list-dir";

export default {
  [Channels.READ_DIR]: ({ params, cb }) => {
    const { dir } = params;

    const files = listDir(dir);

    cb({ data: files });
  },
  [Channels.READ_FILE]: ({ params, cb }) => {
    const { path, options } = params;

    fs.readFile(path, options, (error, data) => {
      if (error) {
        cb({ error });
      } else {
        cb({ data });
      }
    });
  },
  [Channels.READ_JSON_File]: ({ params, cb }) => {
    const { filePath } = params;

    fsa.readJson(filePath, (err, data) => {
      if (err) {
        cb({ error: err });
      } else {
        cb({ data });
      }
    });
  },
  [Channels.WRITE_JSON]: ({ params, cb }) => {
    const { filePath, content } = params;

    fsa.writeJson(filePath, content, (err) => {
      if (err) {
        cb({ error: err });
      } else {
        cb({ data: "success" });
      }
    });
  },
  [Channels.ZIP_FILES]: ({ params, cb }) => {
    console.log("params: ", params);
    const { folderName, files } = params;
    const temp = app.getPath("temp");
    const dest = path.join(temp, folderName);

    fs.mkdir(dest, { recursive: true }, (err) => {
      if (err) {
        cb({ error: err });
      }

      const copyFilePromise = util.promisify(fs.copyFile);
      Promise.all(
        files.map((file) => {
          const fileName = path.basename(file);
          return copyFilePromise(file, path.join(dest, fileName));
        })
      ).then(() => {
        const zipDest = path.join(temp, `${folderName}.zip`);
        zipFolder(dest, zipDest, function (err) {
          if (err) {
            cb({ error: err });
          } else {
            cb({ data: { name: `${folderName}.zip`, filePath: zipDest } });
          }
        });
      });
    });
  },
  [Channels.COPY_FILES]: ({ params, cb }) => {
    const { files, destDir } = params;
    const copyFilePromise = util.promisify(fs.copyFile);

    fs.mkdir(destDir, () => {
      Promise.all(
        files.map((file) => {
          return copyFilePromise(file.path, path.join(destDir, file.name));
        })
      ).then(() => {
        cb({ data: "success" });
      });
    });
  },
  [Channels.UPLOAD_FILE]: ({ params, cb }) => {
    const { uri, key, qiniuToken } = params;

    const config = new qiniu.conf.Config();
    const formUploader = new qiniu.form_up.FormUploader(config);
    const putExtra = new qiniu.form_up.PutExtra();
    // 文件上传
    formUploader.putFile(qiniuToken, key, uri, putExtra, function (respErr, respBody, respInfo) {
      if (respErr) {
        cb({ error: respErr });
      }
      if (respInfo.statusCode == 200) {
        cb({ data: respBody });
      } else {
        console.log(respInfo.statusCode);
        console.log(respBody);
        cb({
          error: `上传失败，错误代码${respInfo.statusCode}`,
        });
      }
    });
  },
  [Channels.DELETE_QINIU_FILE]: ({ params, cb }) => {
    const { bucket, key, qiniuToken } = params;

    var config = new qiniu.conf.Config();
    //config.useHttpsDomain = true;
    config.zone = qiniu.zone.Zone_z0;
    const bucketManager = new qiniu.rs.BucketManager(qiniuToken, config);

    bucketManager.stat(bucket, key, function (err, respBody, respInfo) {
      if (err) {
        cb({ error: err });
      } else {
        if (respInfo.statusCode == 200) {
          cb({ data: respBody });
        } else {
          console.log(respInfo.statusCode);
          console.log(respBody.error);
        }
      }
    });
  },
  [Channels.DOWNLOAD_FILE]: ({ params, cb }) => {
    const { uri, output } = params;

    if (isFileExists(output)) {
      cb({ data: "done" });
    } else {
      try {
        const wd = wget.download(uri, output);
        wd.on("error", (err) => {
          if (err) {
            cb({ error: err });
          }
        });

        wd.on("end", () => {
          cb({ data: "done" });
        });
      } catch (error) {
        cb({ error: error });
      }
    }
  },
  [Channels.UNZIP_FILE]: ({ params, cb }) => {
    const { source, dest } = params;
    fsa.ensureDirSync(dest);
    const inp = fs.createReadStream(source);
    const extract = unzip.Extract({
      path: dest,
    });
    inp.pipe(extract);
    inp.on("close", () => {
      fs.unlink(source, (err) => {
        if (err) {
          cb({ error: err });
        } else {
          cb({ data: "done" });
        }
      });
    });
  },
  [Channels.REMOVE_FILE]: ({ params, cb }) => {
    const { filePath } = params;
    fsa.remove(filePath, (err) => {
      if (err) {
        cb({ error: err });
      } else {
        cb({ data: "done" });
      }
    });
  },
  [Channels.REMOVE_DIR]: ({ params, cb }) => {
    const { directory } = params;
    fsa.remove(directory, (err) => {
      if (err) {
        cb({ error: err });
      } else {
        cb({ data: "done" });
      }
    });
  },
};
