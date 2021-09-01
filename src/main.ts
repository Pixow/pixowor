const moduleAlias = require("module-alias");

moduleAlias.addAliases({
  "@workbench": `${__dirname}/workbench`,
  "@launcher": `${__dirname}/launcher`,
});

import "reflect-metadata";

import * as path from "path";
import * as fs from "fs";
import { app, BrowserWindow, ipcMain } from "electron";
import Startup from "@launcher/bootstrap";
import { Container } from "typedi";
import { autoUpdater } from "electron-updater";
import log from "electron-log";
import WindowService from "@launcher/services/main/windows";
import { IpcMainProcess } from "@launcher/services/main";
import { checkEnvFiles } from "@launcher/utils/utils";
import ViewConf from "@launcher/lib/view-conf";
import { MessageChannel, BrowserService, ChildProcessPool } from "electron-re";
import { StartPluginService } from "@launcher/utils/start-plugin-service";

// import { CustomNodeJsGlobal } from "global";
// declare var global: CustomNodeJsGlobal;

/** -------------------- Env ------------------------*/
global.nodeEnv = process.env.NODE_ENV;
global.pathRuntime = checkEnvFiles().pathRuntime;

// TODO: IpcMainProcess
global.ipcMainProcess = new IpcMainProcess(ipcMain);
// TODO: Use ChildProcessPool
// global.pluginServiceProcess = new ChildProcessPool({
//   path: path.join(app.getAppPath(), "dist/launcher/services/child/plugin.service.js"),
// });

const windowService = Container.get(WindowService);
const viewConf = Container.get(ViewConf);

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

app.whenReady().then(async () => {
  const appService = new BrowserService(
    "io-service",
    path.join(app.getAppPath(), "dist/launcher/services/child/io.service.js"),
    { webPreferences: { webSecurity: true } }
  );

  await appService.connected();
  appService.openDevTools();

  // TODO: 启动plugin service child process
  // global.pluginServiceProcess.send("start-pluginservice", {});
  StartPluginService();

  Startup();

  const mainWin = windowService.getCurrentWindow();

  new AppUpdater(mainWin);
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
});

app.on("activate", () => {
  if (windowService.getCurrentWindow() === null) {
    windowService.openWindow({ windowName: "workbench" });
  }
});

// 未捕获的全局错误
process.on("uncaughtException", (err) => {
  const errorInfo = err.stack.toString();

  const errorFile = path.join(app.getAppPath(), "runtime/error.log");
  fs.writeFile(errorFile, errorInfo, { encoding: "utf8", flag: "w" }, (err) => {
    if (err) {
      console.log(err);
    }
  });
});
