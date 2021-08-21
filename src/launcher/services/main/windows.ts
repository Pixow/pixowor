// 集中管理所有窗口
import ViewConf, { IViewConf } from "@launcher/lib/view-conf";
import { BrowserWindow, remote, screen } from "electron";
import Container, { Inject, Service } from "typedi";

export interface WindowDefinition {
  name: string;
  config: WindowConfig;
}

export type WindowConfigFunction = (window: Electron.BrowserWindow) => void;

export interface WindowConfig {
  url: string;
  options: Electron.BrowserWindowConstructorOptions;
  setup?: WindowConfigFunction;
  onClosed?: WindowConfigFunction;
}

export interface WindowName {
  windowName: string;
}

export interface WindowId {
  windowId: number;
}

export type WindowNameOrId = WindowName & WindowId;

interface IWindowIds {
  [name: number]: string;
}

interface IWindowNames {
  [name: string]: number;
}

interface IStoreWindows {
  [name: string]: WindowConfig;
}

@Service()
export default class WindowService {
  private windowNames: IWindowNames = {};
  private windowIds: IWindowIds = {};
  private storedWindows: IStoreWindows = {};

  constructor(@Inject() private viewConf: ViewConf) {}

  public processWindows(windows: Array<WindowDefinition>): void {
    windows.map((window) => {
      this.addWindowConfig(window.name, window.config);
    });
  }

  public openWindow({ windowName }: WindowName): Electron.BrowserWindow {
    if (this.isWindow(windowName)) {
      return;
    }

    let config = this.getWidowConfig(windowName);
    if (config === undefined) return null;

    let window = this.createWindow(config);
    if (window === null) return null;

    this.addWindow(windowName, window.id);
    return window;
  }

  public closeWindow(target?: WindowNameOrId) {
    const { windowName, windowId } = target;

    let window: Electron.BrowserWindow;

    if (windowName !== undefined) {
      window = this.getWindowByName(windowName);
    }

    if (windowId !== undefined) {
      window = this.getWindowById(windowId);
    }

    if (window == null) return;

    this.removeWindowById(windowId);

    window.close();
  }

  public showWindow(target?: WindowNameOrId) {
    const window = this.getWindow(target);

    if (window !== null) {
      window.show();
    }
  }

  public hideWindow(target?: WindowNameOrId) {
    const window = this.getWindow(target);

    if (window !== null) {
      window.hide();
    }
  }

  public getViewConf(): IViewConf {
    let { width, height } = screen.getPrimaryDisplay().workAreaSize; // 硬件参数
    const viewInfo = this.viewConf.read();

    if (!viewInfo.error && viewInfo.result.width && viewInfo.result.height) {
      width = viewInfo.result.width;
      height = viewInfo.result.height;
    } else {
      width = 800;
      height = 600;
    }

    this.viewConf.setConf({ width, height });

    return {
      width,
      height,
    };
  }

  public setBounds(target?: WindowNameOrId, options = {}, animate = false) {
    const window = this.getWindow(target);

    if (window !== null) {
      let bounds = window.getBounds();
      window.setBounds({ ...bounds, ...options }, animate);
    }
  }

  public openDevTools(target?: WindowName) {
    const { windowName } = target;

    let window: Electron.BrowserWindow;
    if (windowName === null) {
      window = this.getCurrentWindow();
    } else {
      window = this.getWindow(target);
    }

    console.log("openDevTools window: ", window);

    if (window !== null) {
      window.webContents.openDevTools();
    }
  }

  public closeDevTools(target?: WindowName) {
    const { windowName } = target;

    let window: Electron.BrowserWindow;
    if (windowName === null) {
      window = this.getCurrentWindow();
    } else {
      window = this.getWindow(target);
    }

    if (window !== null) {
      window.webContents.closeDevTools();
    }
  }

  public getCurrentWindow() {
    return remote.getCurrentWindow();
  }

  private addWindowConfig(windowName: string, config: WindowConfig) {
    this.storedWindows[windowName] = config;
  }

  private getWidowConfig(windowName: string) {
    return this.storedWindows[windowName];
  }

  private isWindow(windowName: string): boolean {
    let window = this.getWindow({ windowName });
    return window !== null;
  }

  private addWindow(windowName: string, windowId: number) {
    console.log("addWindow: ", windowName, windowId);
    this.windowNames[windowName] = windowId;
    this.windowIds[windowId] = windowName;
  }

  private createWindow(config: WindowConfig): Electron.BrowserWindow {
    let window = new BrowserWindow(config.options);

    window.loadURL(config.url);

    if (config.setup !== null && typeof config.setup === "function") {
      config.setup(window);
    }

    window.on("closed", function () {
      if (config.onClosed !== null && typeof config.onClosed === "function") {
        config.onClosed(window);
      }

      window = null;
    });

    window.on("resize", () => {
      const [_width, _height] = window.getContentSize();
      this.viewConf.setConf({
        width: _width,
        height: _height,
      });
    });

    return window;
  }

  private removeWindowByName(windowName: string) {
    delete this.windowIds[this.windowNames[windowName]];
    delete this.windowNames[windowName];
  }

  private removeWindowById(windowId: number) {
    delete this.windowNames[this.windowIds[windowId]];
    delete this.windowIds[windowId];
  }

  private getWindowByName(windowName: string): Electron.BrowserWindow {
    console.log("windowNames: ", this.windowNames, windowName);
    const id = this.windowNames[windowName];

    if (id === undefined) {
      return null;
    }

    return BrowserWindow.fromId(id);
  }

  private getWindowById(windowId: number): Electron.BrowserWindow {
    return BrowserWindow.fromId(windowId);
  }

  private getWindow(target: WindowName): Electron.BrowserWindow;
  private getWindow(target: WindowId): Electron.BrowserWindow;
  private getWindow(target?: WindowNameOrId): Electron.BrowserWindow {
    const { windowName, windowId } = target;

    if (windowName !== undefined) {
      return this.getWindowByName(windowName);
    }

    if (windowId !== undefined) {
      return this.getWindowById(windowId);
    }

    if (windowName === undefined && windowId === undefined) {
      return this.getCurrentWindow();
    }
  }
}
