const moduleAlias = require("module-alias");

moduleAlias.addAliases({
  "@workbench": `${__dirname}/workbench`,
  "@launcher": `${__dirname}/launcher`,
});

import "reflect-metadata";

import * as path from "path";
import * as fs from "fs";
import * as url from "url";
import { app, BrowserWindow, ipcMain, dialog } from "electron";
import installExtension, { ANGULARJS_BATARANG } from "electron-devtools-installer";

import Startup from "@launcher/bootstrap";
import { Container } from "typedi";
import { autoUpdater } from "electron-updater";
import log from "electron-log";
import WindowService from "@launcher/services/main/windows";
import { IpcMainProcess } from "@launcher/services/main";
import { checkEnvFiles } from "@launcher/utils/utils";
import ViewConf from "@launcher/lib/view-conf";
import { BrowserService, ChildProcessPool } from "electron-re";
const { fork } = require("child_process");

// import { CustomNodeJsGlobal } from "global";
// declare var global: CustomNodeJsGlobal;

/** -------------------- Env ------------------------*/
global.nodeEnv = process.env.NODE_ENV;
global.pathRuntime = checkEnvFiles().pathRuntime;
console.log("🚀 ~ file: main.ts ~ line 33 ~ global.pathRuntime", global.pathRuntime);

// TODO: IpcMainProcess
// global.ipcMainProcess = new IpcMainProcess(ipcMain);

const windowService = Container.get(WindowService);
const viewConf = Container.get(ViewConf);

function StartUserDataServer() {
  global.userDataStaticServiceProcess = fork(
    path.join(app.getAppPath(), "dist/launcher/services/child/user-data.service.js"),
    [app.getPath("userData")]
  );
}

function StopUserDataServer() {
  global.userDataStaticServiceProcess.kill();
}

export default class AppUpdater {
  constructor(private win: BrowserWindow) {
    log.transports.file.level = "info";
    autoUpdater.logger = log;

    let autoUpdateFeed: string;

    switch (process.env.NODE_ENV) {
      case "DEVELOP":
        autoUpdateFeed = "https://osd-dev.tooqing/qing-universe/auto-updates";
        break;
      case "RELEASE":
        autoUpdateFeed = "https://osd-alpha.tooqing.com/qing-universe/auto-updates";
      default:
        autoUpdateFeed = "https://osd.tooqing.com/qing-universe/auto-updates";
        break;
    }

    autoUpdater.setFeedURL(autoUpdateFeed);
    autoUpdater.checkForUpdatesAndNotify();

    autoUpdater.on("checking-for-update", () => {
      this.sendStatusToWindow("Checking for update...");
    });
    autoUpdater.on("update-available", (info) => {
      this.sendStatusToWindow("Update available.");
    });
    autoUpdater.on("update-not-available", (info) => {
      this.sendStatusToWindow("Update not available.");
    });
    autoUpdater.on("error", (err) => {
      this.sendStatusToWindow("Error in auto-updater. " + err);
    });
    autoUpdater.on("download-progress", (progressObj) => {
      let log_message = "Download speed: " + progressObj.bytesPerSecond;
      log_message = log_message + " - Downloaded " + progressObj.percent + "%";
      log_message = log_message + " (" + progressObj.transferred + "/" + progressObj.total + ")";
      this.sendStatusToWindow(log_message);
    });
    autoUpdater.on("update-downloaded", (info) => {
      this.sendStatusToWindow("Update downloaded");
    });

    ipcMain.on("isUpdateNow", (e, arg) => {
      autoUpdater.quitAndInstall();
    });

    ipcMain.on("checkForUpdate", (e, arg) => {
      //执行自动更新检查
      autoUpdater.checkForUpdates();
    });
  }

  sendStatusToWindow(text: string) {
    log.info(text);
    this.win.webContents.send("message", text);
  }
}

function confirmAndRelaunch(e) {
  // dialog options
  const messageBoxOptions = {
    type: "question",
    buttons: ["Cancel", "Relaunch"],
    title: "This will relaunch the app",
    message: "Are you sure to relaunch?",
  };
  dialog.showMessageBox(null, messageBoxOptions).then((data) => {
    if (data.response == 0) {
      e.preventDefault();
    } else {
      app.relaunch();
      app.exit(0);
    }
  });
}

app.whenReady().then(async () => {
  const appService = new BrowserService(
    "io-service",
    path.join(app.getAppPath(), "dist/launcher/services/child/io.service.js"),
    { webPreferences: { webSecurity: true } }
  );

  await appService.connected();
  appService.openDevTools();

  // 使用child_process.fork启动 plugin server
  StartUserDataServer();
  Startup();

  installExtension(ANGULARJS_BATARANG)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log("An error occurred: ", err));

  console.log("WindowService: ", windowService);

  ipcMain.on("relaunch", (e) => {
    confirmAndRelaunch(e);
  });

  ipcMain.on("openSubWindow", (e, args) => {
    const { pluginId, name } = args;
    const windowDefinition = {
      name,
      config: {
        url: url.format({
          pathname: path.resolve(app.getPath("userData"), `plugins/${pluginId}/index.html`),
          protocol: "file:",
          slashes: true,
        }),
        options: {
          width: 800,
          height: 600,
          show: true,
          webPreferences: {
            webSecurity: false,
            nodeIntegration: true,
            enableRemoteModule: true,
            affinity: "",
            webviewTag: true,
          },
        },
      },
    };
    windowService.processWindows([windowDefinition]);
    windowService.openWindow({ windowName: name });
  });

  // const mainWin = windowService.getCurrentWindow();

  // new AppUpdater(mainWin);
});

app.on("window-all-closed", () => {
  console.log("window-all-closed");
  viewConf.writeSync();

  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("quit", () => {
  console.log("quit");
  StopUserDataServer();
});

app.on("activate", () => {
  if (windowService.getCurrentWindow() === null) {
    windowService.openWindow({ windowName: "workbench" });
  }
});

// 未捕获的全局错误
process.on("uncaughtException", (err) => {
  const errorInfo = err.stack.toString();

  const errorFile = path.join(app.getPath("userData"), "runtime/error.log");
  fs.writeFile(errorFile, errorInfo, { encoding: "utf8", flag: "w" }, (err) => {
    if (err) {
      console.log(err);
    }
  });
});
