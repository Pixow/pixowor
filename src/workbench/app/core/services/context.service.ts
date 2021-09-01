import { Injectable } from "@angular/core";
import * as url from "url";
import * as path from "path";
import { ipcRenderer, webFrame, remote } from "electron";
import * as childProcess from "child_process";
import * as fs from "fs";
import { ElectronService } from "./electron.service";

import { User } from "@workbench/app/models/user";
import { Environment } from "@workbench/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ContextService {
  ipcRenderer: typeof ipcRenderer;
  webFrame: typeof webFrame;
  remote: typeof remote;
  childProcess: typeof childProcess;
  fs: typeof fs;

  constructor(private electronService: ElectronService) {
    console.log("ContextService init");
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

  public get Environment() {
    return Environment;
  }

  get isElectron(): boolean {
    return !!(window && window.process && window.process.type);
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

  public get pluginConf() {
    return path.join(this.userDataPath, "plugins/plugin-conf.json");
  }

  public get pluginDirectory() {
    return path.join(this.userDataPath, "plugins");
  }

  public get gameDir() {
    return path.join(this.userDataPath, "games");
  }

  public isFileExists(filePath: string) {
    return fs.existsSync(filePath);
  }

  // ------------- File System ---------------
  public get url() {
    return url;
  }

  public get path() {
    return path;
  }
}
