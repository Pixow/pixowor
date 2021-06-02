import { BrowserWindow, BrowserWindowConstructorOptions, screen } from "electron";

import { Disposable, IDisposable } from "../base/common/lifecycle";

export interface ICodeWindow extends IDisposable {}

export interface IWindowCreationOptions {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  entry: string;
  frame?: boolean;
  resizable?: boolean;
  menu?: boolean;
  show?: boolean;
}

export class CodeWindow extends Disposable implements ICodeWindow {
  constructor(config: IWindowCreationOptions) {
    super();

    const electronScreen = screen;
    const size = electronScreen.getPrimaryDisplay().workAreaSize;

    const options: BrowserWindowConstructorOptions = {
      width: config.width || size.width,
      height: config.height || size.height,
      webPreferences: {
        webSecurity: false,
        nodeIntegration: true,
        allowRunningInsecureContent: false,
        contextIsolation: false, // false if you want to run 2e2 test with Spectron
        enableRemoteModule: true, // true if you want to run 2e2 test  with Spectron or use remote module in renderer context (ie. Angular)
      },
      // backgroundColor: this.themeService.getBackgroundColor(),
    };

    if (config.hasOwnProperty("x")) options.x = config.x;
    if (config.hasOwnProperty("y")) options.y = config.y;
    if (config.hasOwnProperty("frame")) options.frame = config.frame;
    if (config.hasOwnProperty("resizable")) options.resizable = config.resizable;
    if (config.hasOwnProperty("show")) options.show = config.show;

    this._win = new BrowserWindow(options);

    if (config.hasOwnProperty("menu") && !config.menu) {
      this._win.setMenu(null);
    }

    this._win.loadURL(config.entry);
  }

  private _win: BrowserWindow;
  get win(): BrowserWindow {
    return this._win;
  }
}
