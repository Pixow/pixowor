import "module-alias/register";
import "reflect-metadata";

import * as path from "path";
import * as fs from "fs";
import { app, ipcMain } from "electron";
import Startup from "@launcher/bootstrap";
import { Container } from "typedi";
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

app.whenReady().then(async () => {
  const appService = new BrowserService(
    "app",
    path.join(app.getAppPath(), "dist/launcher/services/child/app.service.js"),
    { webPreferences: { webSecurity: true } }
  );

  await appService.connected();
  appService.openDevTools();

  // 启动plugin service child process
  // global.pluginServiceProcess.send("start-pluginservice", {});
  StartPluginService();

  Startup();
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
