import * as url from "url";
import * as path from "path";
import { app, ipcMain } from "electron";
import { CodeWindow } from "./window";

const SIGNIN_WINDOW = {
  width: 1037,
  height: 738,
};

export class CodeApplication {
  constructor() {
    this.registListeners();
  }

  private registListeners(): void {
    const elementEditorEntry = url.format({
      pathname: path.join(__dirname, "../../../extensions/element-editor/index.html"),
      protocol: "file:",
      slashes: true,
    });
    ipcMain.on("load-element-editor", () => {
      const elementEditorWin = new CodeWindow({
        entry: elementEditorEntry,
      });
    });
  }

  startup() {
    const args = process.argv.slice(1),
      serve = args.some((val) => val === "--serve");

    let workbenchEntry: string;

    if (serve) {
      workbenchEntry = "http://localhost:4200";
    } else {
      workbenchEntry = url.format({
        pathname: path.join(__dirname, "../../workbench/index.html"),
        protocol: "file:",
        slashes: true,
      });
    }

    const codeWin = new CodeWindow({
      width: SIGNIN_WINDOW.width,
      height: SIGNIN_WINDOW.height,
      entry: workbenchEntry,
      frame: false,
      resizable: false,
    });

    if (serve) {
      codeWin.win.webContents.openDevTools();
    }
  }
}
