import * as url from "url";
import * as path from "path";
import * as fs from "fs";
import { ipcMain, app } from "electron";
const Server = require("electron-rpc/server");
import { CodeWindow } from "./window";
import routes from "./routes";
const { spawn } = require("child_process");
export class CodeApplication {
  constructor() {
    this.registListeners();
  }

  private registListeners(): void {}

  private initRpcServer(window) {
    const app = new Server();
    app.configure(window.webContents);

    app.on("load-game", (req, next) => {
      const { gameId } = req;
      fs.readFile(path.join(app.getPath("userData"), gameId), (err, data) => {
        if (err) return next(err);
        next(null, data);
      });
    });
  }

  private initWorkerWindow() {
    const workerURL = ` `;
    const workerWindow = new CodeWindow({
      entry: workerURL,
      frame: true,
      resizable: false,
      menu: false,
    });
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

    const codeWin = new CodeWindow({
      entry: workbenchEntry,
      frame: true,
      resizable: false,
      menu: false,
    });

    this.initWorkerWindow();

    this.initIpcRoutes();

    this.initRpcServer(codeWin);

    this.startPluginsRepoServer();

    if (serve) {
      codeWin.win.webContents.openDevTools();
    }
  }
}
