import "module-alias/register";
import "reflect-metadata";

import * as path from "path";
import * as fs from "fs";
import { app, ipcMain } from "electron";
import Startup from "@launcher/bootstrap";
import { Container } from "typedi";
import WindowService from "@launcher/services/main/windows";
import { IpcMainProcess } from "@launcher/services/main";

/** -------------------- Env ------------------------*/
global.nodeEnv = process.env.NODE_ENV;

global.ipcMainProcess = new IpcMainProcess(ipcMain);

const windowService = Container.get(WindowService);

app.once("ready", () => {
  Startup();
});

app.on("window-all-closed", () => {
  console.log("window-all-closed");

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
// process.on("uncaughtException", (err) => {
//   const errorInfo = err.stack.toString();

//   const errorFile = path.join(app.getAppPath(), "runtime/error.log");
//   fs.writeFile(errorFile, errorInfo, { encoding: "utf8", flag: "w" }, (err) => {
//     if (err) {
//       console.log(err);
//     }
//   });
// });
