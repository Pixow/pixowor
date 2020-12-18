import * as url from "url";
import * as path from "path";
import { app, ipcMain } from "electron";
import { CodeWindow } from "./window";

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
        width: 500,
        height: 300,
        x: 500,
        y: 500,
        url: elementEditorEntry,
      });
    });
  }

  startup() {
    const workbenchEntry = url.format({
      pathname: path.join(__dirname, "../../workbench/index.html"),
      protocol: "file:",
      slashes: true,
    });
    const codeWin = new CodeWindow({
      width: 500,
      height: 300,
      x: 100,
      y: 200,
      url: workbenchEntry,
    });
  }
}
