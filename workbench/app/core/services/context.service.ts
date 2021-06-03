import { Injectable } from "@angular/core";
import * as url from "url";
import * as path from "path";
import { ipcRenderer, webFrame, remote } from "electron";
import * as childProcess from "child_process";
import * as fs from "fs";
import { ElectronService } from "./electron.service";

import { SocketConnection } from "workbench/app/core/socket-connection";
import { QingWebApiSdk } from "qing-web-api-sdk";
import { LocalStorage } from "workbench/app/utils/localstorage";
import { User } from "workbench/app/models/user";
import { UI_CHANNELS } from "launcher/code/ipc_channel";

@Injectable({
  providedIn: "root",
})
export class ContextService {
  ipcRenderer: typeof ipcRenderer;
  webFrame: typeof webFrame;
  remote: typeof remote;
  childProcess: typeof childProcess;
  fs: typeof fs;

  private _sdk = QingWebApiSdk.getInstance();

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

  public get pluginServer() {
    return `http://localhost:45326/plugins`
  }

  public get pluginDirectory() {
    return path.join(this.userDataPath, "plugins");
  }

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
    // 初始化SDK
    const user: User = LocalStorage.get("user");
    if (user) {
      this._sdk.setToken(user.token);
    }
  }

  public get sdk() {
    return this._sdk;
  }

  public get socket() {
    return SocketConnection.getInstance();
  }

  // ------------- File System ---------------
  public get url() {
    return url;
  }

  public get path() {
    return path;
  }

  readDir(dir: string, cb: Function) {
    this.electronService.readDir(dir, cb);
  }

  readFile(filePath: string, cb: Function) {
    this.ipcRenderer.send(UI_CHANNELS.READ_FILE, { path: filePath });
    this.ipcRenderer.once(UI_CHANNELS.READ_FILE, (e, res) => {
      cb(res);
    });
  }

  readAppFile(uri: string, cb: Function) {
    this.electronService.readAppFile(uri, cb);
  }

  writeFile(content: string, cb: Function) {
    this.electronService.writeFile(content, cb);
  }

  writeJson(filePath: string, content: any, cb: Function) {
    this.ipcRenderer.send(UI_CHANNELS.WRITE_JSON, { filePath, content });
    this.ipcRenderer.once(UI_CHANNELS.WRITE_JSON, (res) => {
      cb(res);
    });
  }

  zipFiles(params: { files: string[]; folderName: string }, cb: Function) {
    this.ipcRenderer.send(UI_CHANNELS.ZIP_FILES, params);
    this.ipcRenderer.once(UI_CHANNELS.ZIP_FILES, (e, res) => {
      cb(res);
    });
  }

  copyFiles(files: File[], destDir: string, cb: Function) {
    this.ipcRenderer.send(UI_CHANNELS.COPY_FILES, { files, destDir });
    this.ipcRenderer.once(UI_CHANNELS.COPY_FILES, (e, res) => {
      cb(res);
    });
  }

  removeFile(filePath: string, cb: Function) {
    this.ipcRenderer.send(UI_CHANNELS.REMOVE_FILE, { filePath });
    this.ipcRenderer.once(UI_CHANNELS.REMOVE_FILE, (e, res) => {
      cb(res);
    });
  }

  unzipFile(source: string, dest: string, cb: Function) {
    this.ipcRenderer.send(UI_CHANNELS.UNZIP_FILE, { source, dest });
    this.ipcRenderer.once(UI_CHANNELS.UNZIP_FILE, (e, res) => {
      cb(res);
    });
  }

  uploadFile(params: { uri: string; key: string; qiniuToken: string }, cb: Function) {
    this.ipcRenderer.send(UI_CHANNELS.UPLOAD_FILE, params);
    this.ipcRenderer.once(UI_CHANNELS.UPLOAD_FILE, (e, res) => {
      cb(res);
    });
  }

  downloadFile(uri: string, output: string, cb: Function) {
    this.ipcRenderer.send(UI_CHANNELS.DOWNLOAD_FILE, { uri, output });
    this.ipcRenderer.once(UI_CHANNELS.DOWNLOAD_FILE, (e, res) => {
      cb(res);
    });
  }
}
