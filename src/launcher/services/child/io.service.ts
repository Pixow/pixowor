{
  const { app } = require("electron");
  const path = require("path");
  const fs = require("fs-extra");
  const url = require("url");
  const util = require("util");
  const qiniu = require("qiniu");
  const zipFolder = require("zip-folder");
  const unzip = require("unzip-stream");
  const wget = require("wget-improved");

  const { EreMessageChannel } = require("electron-re");

  // let listDir;
  // if (process.env.NODE_ENV === "RELEASE") {
  //   listDir = require(path.join(app.getAppPath(), "dist/launcher/utils/list-dir.js"));
  // } else {
  // }
  const { listDir } = require(path.join(app.getAppPath(), "dist/launcher/list-dir.js"));

  const msgc = EreMessageChannel;

  // TODO: 从qing-core中导入，但是qing-core打包为umd方式导入有问题
  const IOEvents = {
    LISTDIR: "list-dir",
    REMOVEDIR: "remove-dir",
    READFILE: "read-file",
    WRITEFILE: "write-file",
    REMOVEFILE: "remove-file",
    READJSON: "read-json",
    WRITEJSON: "write-json",
    DOWNLOADFILE: "download-file",
    UPLOADFILE: "upload-file",
    COPYFILES: "copy-files",
    ZIPFILES: "zip-files",
    UNZIP: "unzip",

    UPLOAD_PLUGIN: "upload-plugin",
    UPLOAD_PLUGIN_REPLY: "upload-plugin_reply",

    DOWNLOAD_INSTALL_PLUGIN: "download-install-plugin",
    DOWNLOAD_INSTALL_PLUGIN_REPLY: "download-install-plugin_reply",

    UPLOADFILE_REPLY: "upload-file_reply",
    DOWNLOADFILE_REPLY: "download-file_reply",
  };

  msgc.on("test", (event, args) => {
    console.log("app service: ", event, args);
    msgc.sendTo(event.senderId, "test_replay", { value: 1 });
  });

  msgc.handle(IOEvents.READFILE, (event, args) => {
    const { path, options } = args;
    const data = fs.readFileSync(path, options);

    return { error: null, data };
  });

  msgc.handle(IOEvents.READJSON, (event, args) => {
    const { path } = args;
    const rawdata = fs.readFileSync(path);
    const data = JSON.parse(rawdata);

    return { error: null, data };
  });

  msgc.handle(IOEvents.WRITEJSON, (event, args) => {
    const { path, data } = args;

    try {
      fs.writeFileSync(path, JSON.stringify(data));
      return { error: null, data: "success" };
    } catch (error) {
      return { error, data: null };
    }
  });

  msgc.handle(IOEvents.LISTDIR, (event, args) => {
    const { dir } = args;

    const files = listDir(dir);

    return { error: null, data: files };
  });

  msgc.handle(IOEvents.COPYFILES, async (event, args) => {
    const { source, dest } = args;

    fs.ensureDirSync(dest);

    await Promise.all(
      source.map((file) => {
        return fs.copy(file.path, path.join(dest, file.name));
      })
    );

    return { error: null, data: "success" };
  });

  msgc.handle(IOEvents.ZIPFILES, async (event, args) => {
    const { files, folderName } = args;
    const temp = app.getPath("temp");
    const dest = path.join(temp, folderName);

    fs.mkdirSync(dest, { recursive: true });

    await Promise.all(
      files.map((file) => {
        return fs.copy(file.path, path.join(dest, file.file));
      })
    );

    const zipFolderAsync = util.promisify(zipFolder);

    await zipFolderAsync(dest, path.join(temp, `${folderName}.zip`));

    return {
      error: null,
      data: { fileName: `${folderName}.zip`, filePath: path.join(temp, `${folderName}.zip`) },
    };
  });

  // TODO: 将上传插件的逻辑放在一起
  msgc.on(IOEvents.UPLOAD_PLUGIN, async (event, args) => {
    const { files, folderName, token, plugin } = args;

    const temp = app.getPath("temp");
    const dest = path.join(temp, folderName);

    fs.mkdirSync(dest, { recursive: true });

    await Promise.all(
      files.map((file) => {
        return fs.copy(file.path, path.join(dest, file.file));
      })
    );

    const zipFolderAsync = util.promisify(zipFolder);

    await zipFolderAsync(dest, path.join(temp, `${folderName}.zip`));

    const config = new qiniu.conf.Config();
    const formUploader = new qiniu.form_up.FormUploader(config);
    const putExtra = new qiniu.form_up.PutExtra();

    const fileName = `${folderName}.zip`;
    const filePath = path.join(temp, fileName);

    // 文件上传
    formUploader.putFile(
      token,
      fileName,
      filePath,
      putExtra,
      function (respErr, respBody, respInfo) {
        if (respErr) {
          msgc.sendTo(event.senderId, IOEvents.UPLOAD_PLUGIN_REPLY, { error: respErr, data: null });
          return;
        }
        if (respInfo.statusCode == 200) {
          msgc.sendTo(event.senderId, IOEvents.UPLOAD_PLUGIN_REPLY, {
            error: null,
            data: { ...respBody, plugin },
          });
        } else {
          msgc.sendTo(event.senderId, IOEvents.UPLOAD_PLUGIN_REPLY, {
            error: `上传失败，错误代码${respInfo.statusCode}`,
            data: null,
          });
        }
      }
    );
  });

  msgc.on(IOEvents.DOWNLOAD_INSTALL_PLUGIN, (event, args) => {
    const { plugin, uri, output, dest } = args;

    try {
      const wd = wget.download(uri, output);
      wd.on("error", (err) => {
        if (err) {
          msgc.sendTo(event.senderId, IOEvents.DOWNLOAD_INSTALL_PLUGIN_REPLY, {
            error: err,
            data: null,
          });
        }
      });

      wd.on("end", () => {
        fs.ensureDirSync(dest);
        const inp = fs.createReadStream(output);
        const extract = unzip.Extract({
          path: dest,
        });
        inp.pipe(extract);
        inp.on("close", () => {
          msgc.sendTo(event.senderId, IOEvents.DOWNLOAD_INSTALL_PLUGIN_REPLY, {
            error: null,
            data: {
              plugin,
            },
          });
        });
      });
    } catch (error) {
      msgc.sendTo(event.senderId, IOEvents.DOWNLOAD_INSTALL_PLUGIN_REPLY, {
        error: error,
        data: null,
      });
    }
  });

  msgc.handle(IOEvents.UNZIP, async (event, args) => {
    const { source, dest } = args;
    fs.ensureDirSync(dest);
    const inp = fs.createReadStream(source);
    const extract = unzip.Extract({
      path: dest,
    });
    inp.pipe(extract);
    inp.on("close", () => {
      return { error: null, data: "done" };
    });
  });

  msgc.handle(IOEvents.REMOVEDIR, (event, args) => {
    const { dir } = args;

    fs.removeSync(dir);

    return { error: null, data: "success" };
  });

  msgc.on(IOEvents.UPLOADFILE, async (event, args) => {
    const { fileName, filePath, token } = args;

    const config = new qiniu.conf.Config();
    const formUploader = new qiniu.form_up.FormUploader(config);
    const putExtra = new qiniu.form_up.PutExtra();

    // 文件上传
    formUploader.putFile(
      token,
      fileName,
      filePath,
      putExtra,
      function (respErr, respBody, respInfo) {
        if (respErr) {
          msgc.sendTo(event.senderId, IOEvents.UPLOADFILE_REPLY, { error: respErr, data: null });
        }
        if (respInfo.statusCode == 200) {
          msgc.sendTo(event.senderId, IOEvents.UPLOADFILE_REPLY, { error: null, data: respBody });
        } else {
          msgc.sendTo(event.senderId, IOEvents.UPLOADFILE_REPLY, {
            error: `上传失败，错误代码${respInfo.statusCode}`,
            data: null,
          });
        }
      }
    );
  });

  msgc.on(IOEvents.DOWNLOADFILE, (event, args) => {
    let { uri, output } = args;

    try {
      const wd = wget.download(uri, output);
      wd.on("error", (err) => {
        if (err) {
          msgc.sendTo(event.senderId, IOEvents.DOWNLOADFILE_REPLY, { error: err, data: null });
        }
      });

      wd.on("end", () => {
        msgc.sendTo(event.senderId, IOEvents.DOWNLOADFILE_REPLY, { error: null, data: "done" });
      });
    } catch (error) {
      msgc.sendTo(event.senderId, IOEvents.DOWNLOADFILE_REPLY, { error: error, data: null });
    }
  });
}
