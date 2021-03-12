import * as url from "url";
import * as path from "path";
import * as fs from "fs";
import { ipcMain, app } from "electron";
const Server = require("electron-rpc/server");
import { CodeWindow } from "./window";
import routes from "./routes";
import { UI2WORKER_CHANNELS, WORKER2UI_CHANNELS } from "./ipc_channel";
const { spawn } = require("child_process");
export class CodeApplication {
  constructor() {
    this.registListeners();
  }

  private registListeners(): void {}

  private initRpcServer(window) {
    const app = new Server();
    app.configure(window.webContents);
  }

  private initWorkerWindow(isServe: boolean = false): CodeWindow {
    let workbenchEntry: string;

    if (isServe) {
      workbenchEntry = "http://localhost:4301";
    } else {
      workbenchEntry = url.format({
        pathname: path.join(__dirname, "../../worker/index.html"),
        protocol: "file:",
        slashes: true,
      });
    }

    const workerWindow = new CodeWindow({
      entry: workbenchEntry,
      frame: true,
      resizable: false,
      menu: false,
      show: true,
    });

    if (isServe) {
      workerWindow.win.webContents.openDevTools();
    }

    return workerWindow;
  }

  private initIpcRoutes() {
    for (let routeName in routes) {
      ipcMain.on(routeName, (e, params) => {
        routes[routeName]({
          params,
          cb: (response) => {
            e.sender.send(routeName, response);
          },
        });
      });
    }
  }

  private initUI2WorkerRoutes(workerWindow) {
    for (let routeName in UI2WORKER_CHANNELS) {
      ipcMain.on(UI2WORKER_CHANNELS[routeName], (e, params) => {
        workerWindow.win.webContents.send(UI2WORKER_CHANNELS[routeName], params);
      });
    }
  }

  private initWorker2UIRoutes(uiWindow) {
    for (let routeName in WORKER2UI_CHANNELS) {
      ipcMain.on(WORKER2UI_CHANNELS[routeName], (e, params) => {
        uiWindow.win.webContents.send(WORKER2UI_CHANNELS[routeName], params);
      });
    }
  }

  private startPluginsRepoServer() {
    const server = path.join(__dirname, "plugins_server.js");
    console.log("server: ", server, app.getAppPath());
    const ls = spawn("node", [server, app.getAppPath()]);
    ls.stdout.on("data", (data) => {
      console.log(`stdout: ${data}`);
    });
  }

  startup() {
    const args = process.argv.slice(1),
      serve = args.some((val) => val === "--serve");

    let workbenchEntry: string;

    if (serve) {
      workbenchEntry = "http://localhost:4300";
    } else {
      // TODO: change this entry
      workbenchEntry = url.format({
        pathname: path.join(__dirname, "../../workbench/index.html"),
        protocol: "file:",
        slashes: true,
      });
    }

    const uiWindow = new CodeWindow({
      entry: workbenchEntry,
      frame: true,
      resizable: false,
      menu: false,
    });

    const workerWindow = this.initWorkerWindow(serve);

    this.initIpcRoutes();

    this.initRpcServer(uiWindow);

    this.startPluginsRepoServer();

    this.initWorker2UIRoutes(uiWindow);
    this.initUI2WorkerRoutes(workerWindow);

    if (serve) {
      uiWindow.win.webContents.openDevTools();
    }
  }
}
