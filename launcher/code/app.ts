import * as url from "url";
import * as path from "path";
import * as fs from "fs";
import { app, ipcMain } from "electron";
const Server = require("electron-rpc/server");
import { CodeWindow } from "./window";

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

  startup() {
    const args = process.argv.slice(1),
      serve = args.some((val) => val === "--serve");

    let workbenchEntry: string;

    if (serve) {
      workbenchEntry = "http://localhost:4300";
    } else {
      // TODO: change this entry
      workbenchEntry = url.format({
        pathname: path.join(__dirname, "../../editor/index.html"),
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

    this.initRpcServer(codeWin);

    if (serve) {
      codeWin.win.webContents.openDevTools();
    }
  }
}
