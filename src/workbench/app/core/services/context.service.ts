import { Injectable } from "@angular/core";
import * as url from "url";
import * as path from "path";
import { ipcRenderer, webFrame, remote } from "electron";
import * as childProcess from "child_process";
import * as fs from "fs";
import { ElectronService } from "./electron.service";

import { SocketConnection } from "@workbench/app/core/socket-connection";
import { User } from "@workbench/app/models/user";
import { Channels } from "@launcher/config/ipc_channel";
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

  // TODO: game的功能应该放在game相关的插件中
  public isGameExists(username: string, gameId: string): boolean {
    return fs.existsSync(path.join(this.userDataPath, `${username}/game/${gameId}`));
  }

  // TODO: game的功能应该放在game相关的插件中
  public downloadGame(username: string, gameId: string, version: string): Promise<boolean> {
    const uri = `${username}/game/${gameId}/${version}/${gameId}.zip`;
    const remoteUri = this.url.resolve(Environment.WEB_RESOURCE_URI, uri);
    const gameDest = path.join(this.userDataPath, `${username}/game/${gameId}`);
    return new Promise((resolve, reject) => {
      const tempGameZip = path.join(this.tempPath, `${gameId}.zip`);
      this.downloadFile(remoteUri, tempGameZip, () => {
        this.unzipFile(tempGameZip, gameDest, ({ error, data }) => {
          if (error) {
            reject(error);
          }
          resolve(true);
        });
      });
    });
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

  public readFileInUserData(filePath: string, options: object = {}) {
    return new Promise((resolve, reject) => {
      this.readFile(path.join(this.userDataPath, filePath), options, ({ error, data }) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  }

  public readDirInUserData(dir: string) {
    return new Promise((resolve, reject) => {
      this.readDir(path.join(this.userDataPath, dir), ({ error, data }) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  }

  public readDir(dir: string, cb: Function) {
    this.ipcRenderer.send(Channels.READ_DIR, { dir });
    this.ipcRenderer.once(Channels.READ_DIR, (e, res) => {
      cb(res);
    });
  }

  public readFile(filePath: string, options = {}, cb: Function) {
    this.ipcRenderer.send(Channels.READ_FILE, { path: filePath, options });
    this.ipcRenderer.once(Channels.READ_FILE, (e, res) => {
      cb(res);
    });
  }

  public readAppFile(uri: string, cb: Function) {
    const filePath = path.join(this.appPath, uri);
    this.ipcRenderer.send(Channels.READ_FILE, { path: filePath });
    this.ipcRenderer.once(Channels.READ_FILE, (e, res) => {
      cb(res);
    });
  }

  public writeFile(content: string, cb: Function) {
    this.ipcRenderer.send(Channels.WRITE_FILE, { content });
    this.ipcRenderer.once(Channels.WRITE_FILE, (e, res) => {
      cb(res);
    });
  }

  public writeJson(filePath: string, content: any, cb: Function) {
    this.ipcRenderer.send(Channels.WRITE_JSON, { filePath, content });
    this.ipcRenderer.once(Channels.WRITE_JSON, (res) => {
      cb(res);
    });
  }

  public zipFiles(params: { files: string[]; folderName: string }, cb: Function) {
    this.ipcRenderer.send(Channels.ZIP_FILES, params);
    this.ipcRenderer.once(Channels.ZIP_FILES, (e, res) => {
      cb(res);
    });
  }

  public copyFiles(files: File[], destDir: string, cb: Function) {
    this.ipcRenderer.send(Channels.COPY_FILES, { files, destDir });
    this.ipcRenderer.once(Channels.COPY_FILES, (e, res) => {
      cb(res);
    });
  }

  public removeFile(filePath: string, cb: Function) {
    this.ipcRenderer.send(Channels.REMOVE_FILE, { filePath });
    this.ipcRenderer.once(Channels.REMOVE_FILE, (e, res) => {
      cb(res);
    });
  }

  public removeDir(directory: string, cb: Function) {
    this.ipcRenderer.send(Channels.REMOVE_DIR, { directory });
    this.ipcRenderer.once(Channels.REMOVE_DIR, (e, res) => {
      cb(res);
    });
  }

  public unzipFile(source: string, dest: string, cb: Function) {
    this.ipcRenderer.send(Channels.UNZIP_FILE, { source, dest });
    this.ipcRenderer.once(Channels.UNZIP_FILE, (e, res) => {
      cb(res);
    });
  }

  public uploadFile(params: { uri: string; key: string; qiniuToken: string }, cb: Function) {
    this.ipcRenderer.send(Channels.UPLOAD_FILE, params);
    this.ipcRenderer.once(Channels.UPLOAD_FILE, (e, res) => {
      cb(res);
    });
  }

  public downloadFile(uri: string, output: string, cb: Function) {
    this.ipcRenderer.send(Channels.DOWNLOAD_FILE, { uri, output });
    this.ipcRenderer.once(Channels.DOWNLOAD_FILE, (e, res) => {
      cb(res);
    });
  }
}
