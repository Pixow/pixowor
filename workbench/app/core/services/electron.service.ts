import { Injectable } from "@angular/core";

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer, webFrame, remote } from "electron";
import * as childProcess from "child_process";
import * as fs from "fs";

@Injectable()
export class ElectronService {
  ipcRenderer: typeof ipcRenderer;
  webFrame: typeof webFrame;
  remote: typeof remote;
  childProcess: typeof childProcess;
  fs: typeof fs;

  get isElectron(): boolean {
    return !!(window && window.process && window.process.type);
  }

  constructor() {
    // Conditional imports
    if (this.isElectron) {
      this.ipcRenderer = window.require("electron").ipcRenderer;
      this.webFrame = window.require("electron").webFrame;

      // If you wan to use remote object, pleanse set enableRemoteModule to true in main.ts
      this.remote = window.require("electron").remote;

      this.childProcess = window.require("child_process");
      this.fs = window.require("fs");
    }
  }

  public get appPath() {
    return this.remote.app.getAppPath();
  }

  public get appDataPath() {
    return this.remote.app.getPath("appData");
  }

  public get userDataPath() {
    return this.remote.app.getPath("userData");
  }

  public get tempPath() {
    return this.remote.app.getPath("temp");
  }

  public message2Main(command: string, payload: any) {
    this.ipcRenderer.send("message-from-ui", {
      command,
      payload,
    });
  }
}
