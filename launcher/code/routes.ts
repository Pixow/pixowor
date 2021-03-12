const zipFolder = require("zip-folder");
const unzip = require("unzip-stream");
const request = require("request");
const qiniu = require("qiniu");
import { app } from "electron";
import * as path from "path";
import * as fs from "fs";
import * as util from "util";
import * as url from "url";
import * as wget from "wget-improved";
import * as fsa from "fs-extra";

import { UI_CHANNELS } from "./ipc_channel";
import { isFileExists, readAFile } from "../base/node/file";

export default {
  [UI_CHANNELS.READ_FILE]: ({ params, cb }) => {
    const { path } = params;

    readAFile({ path, cb });
  },
  [UI_CHANNELS.READ_JSON]: ({ params, cb }) => {
    const { filePath } = params;

    fsa.readJson(filePath, (err, data) => {
      if (err) {
        cb({ error: err });
      } else {
        cb({ data });
      }
    });
  },
  [UI_CHANNELS.WRITE_JSON]: ({ params, cb }) => {
    const { filePath, content } = params;

    fsa.writeJson(filePath, content, (err) => {
      if (err) {
        cb({ error: err });
      } else {
        cb({ data: "success" });
      }
    });
  },
  [UI_CHANNELS.ZIP_FILES]: ({ params, cb }) => {
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
  [UI_CHANNELS.UPLOAD_FILE]: ({ params, cb }) => {
    const { uri, key, qiniuToken } = params;
    console.log("uri, qiniuToken: ", uri, key, qiniuToken);

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
      }
    });
  },
  [UI_CHANNELS.DOWNLOAD_FILE]: ({ params, cb }) => {
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
  [UI_CHANNELS.UNZIP_FILE]: ({ params, cb }) => {
    const { source, dest } = params;

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
};
