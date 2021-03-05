import { Injectable } from "@angular/core";

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer, webFrame, remote } from "electron";
import * as childProcess from "child_process";
import * as fs from "fs";
import * as url from "url";
import * as path from "path";
import ipc_channel from "launcher/code/ipc_channel";
import { WorkbenchConfig } from "workbench/environments/environment";

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

  public readAppFile(uri: string, cb: Function) {
    const filePath = path.join(this.appPath, uri);
    this.ipcRenderer.send(ipc_channel.READ_FILE, { path: filePath });
    this.ipcRenderer.once(ipc_channel.READ_FILE, (e, res) => {
      cb(res);
    });
  }

  public readAppDataFile(uri: string, cb: Function) {
    const filePath = path.join(this.appDataPath, uri);
    this.ipcRenderer.send(ipc_channel.READ_FILE, { path: filePath });
    this.ipcRenderer.once(ipc_channel.READ_FILE, (e, res) => {
      cb(res);
    });
  }

  public readFile(filePath: string, cb: Function) {
    this.ipcRenderer.send(ipc_channel.READ_FILE, { path: filePath });
    this.ipcRenderer.once(ipc_channel.READ_FILE, (e, res) => {
      cb(res);
    });
  }

  public readJson(filePath: string, cb: Function) {
    this.ipcRenderer.send(ipc_channel.READ_JSON, { filePath });
    this.ipcRenderer.once(ipc_channel.READ_JSON, (e, res) => {
      cb(res);
    });
  }

  public writeFile(content: string, cb: Function) {
    this.ipcRenderer.send(ipc_channel.WRITE_FILE, { content });
    this.ipcRenderer.once(ipc_channel.WRITE_FILE, (e, res) => {
      cb(res);
    });
  }
  public writeJson({ filePath, content }: { filePath: string; content: any }, cb: Function) {
    this.ipcRenderer.send(ipc_channel.WRITE_JSON, { filePath, content });
    this.ipcRenderer.once(ipc_channel.WRITE_JSON, (res) => {
      cb(res);
    });
  }

  public zipFiles({ files, folderName }: { files: string[]; folderName: string }, cb: Function) {
    this.ipcRenderer.send(ipc_channel.ZIP_FILES, { files, folderName });
    this.ipcRenderer.once(ipc_channel.ZIP_FILES, (e, res) => {
      cb(res);
    });
  }

  public unzipFile({ source, dest }: { source: string; dest: string }, cb: Function) {
    this.ipcRenderer.send(ipc_channel.UNZIP_FILE, { source, dest });
    this.ipcRenderer.once(ipc_channel.UNZIP_FILE, (e, res) => {
      cb(res);
    });
  }

  public uploadFile(
    { uri, key, qiniuToken }: { uri: string; key: string; qiniuToken: string },
    cb: Function
  ) {
    this.ipcRenderer.send(ipc_channel.UPLOAD_FILE, { uri, key, qiniuToken });
    this.ipcRenderer.once(ipc_channel.UPLOAD_FILE, (e, res) => {
      cb(res);
    });
  }

  public downloadFile({ uri, output }: { uri: string; output: string }, cb: Function) {
    this.ipcRenderer.send(ipc_channel.DOWNLOAD_FILE, { uri, output });
    this.ipcRenderer.once(ipc_channel.DOWNLOAD_FILE, (e, res) => {
      cb(res);
    });
  }
}
