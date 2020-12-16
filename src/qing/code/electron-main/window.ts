import * as url from "url";
import * as path from "path";
import { BrowserWindow, BrowserWindowConstructorOptions } from "electron";

import { Disposable, IDisposable } from "@qing/base/common/lifecycle";

export interface ICodeWindow extends IDisposable {}

export interface IWindowCreationOptions {
  width: number;
  height: number;
  x: number;
  y: number;
}

export class CodeWindow extends Disposable implements ICodeWindow {
  constructor(config: IWindowCreationOptions) {
    super();

    const options: BrowserWindowConstructorOptions = {
      width: config.width,
      height: config.height,
      x: config.x,
      y: config.y,
      webPreferences: {
        nodeIntegration: true,
        allowRunningInsecureContent: false,
        contextIsolation: false, // false if you want to run 2e2 test with Spectron
        enableRemoteModule: true, // true if you want to run 2e2 test  with Spectron or use remote module in renderer context (ie. Angular)
      },
      // backgroundColor: this.themeService.getBackgroundColor(),
    };

    this._win = new BrowserWindow(options);
    this._win.loadURL(
      url.format({
        pathname: path.join(__dirname, "../../../auth/index.html"),
        protocol: "file:",
        slashes: true,
      })
    );
  }

  private _win: BrowserWindow;
  get win(): BrowserWindow {
    return this._win;
  }
}
