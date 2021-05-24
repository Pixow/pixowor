import { Injectable } from "@angular/core";

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer, webFrame, remote } from "electron";
import * as childProcess from "child_process";
import * as fs from "fs";
import * as url from "url";
import * as path from "path";
import { UI_CHANNELS, WORKER2UI_CHANNELS, UI2WORKER_CHANNELS } from "launcher/code/ipc_channel";
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

  public readAppFile(uri: string, cb: Function) {
    const filePath = path.join(this.appPath, uri);
    this.ipcRenderer.send(UI_CHANNELS.READ_FILE, { path: filePath });
    this.ipcRenderer.once(UI_CHANNELS.READ_FILE, (e, res) => {
      cb(res);
    });
  }

  public readAppDataFile(uri: string, cb: Function) {
    const filePath = path.join(this.appDataPath, uri);
    this.ipcRenderer.send(UI_CHANNELS.READ_FILE, { path: filePath });
    this.ipcRenderer.once(UI_CHANNELS.READ_FILE, (e, res) => {
      cb(res);
    });
  }

  public readDir(dir: string, cb: Function) {
    this.ipcRenderer.send(UI_CHANNELS.READ_DIR, { dir });
    this.ipcRenderer.once(UI_CHANNELS.READ_DIR, (e, res) => {
      cb(res);
    });
  }

  public readFile(filePath: string, cb: Function) {
    this.ipcRenderer.send(UI_CHANNELS.READ_FILE, { path: filePath });
    this.ipcRenderer.once(UI_CHANNELS.READ_FILE, (e, res) => {
      cb(res);
    });
  }

  public readJson(filePath: string, cb: Function) {
    this.ipcRenderer.send(UI_CHANNELS.READ_JSON, { filePath });
    this.ipcRenderer.once(UI_CHANNELS.READ_JSON, (e, res) => {
      cb(res);
    });
  }

  public writeFile(content: string, cb: Function) {
    this.ipcRenderer.send(UI_CHANNELS.WRITE_FILE, { content });
    this.ipcRenderer.once(UI_CHANNELS.WRITE_FILE, (e, res) => {
      cb(res);
    });
  }
  public writeJson({ filePath, content }: { filePath: string; content: any }, cb: Function) {
    this.ipcRenderer.send(UI_CHANNELS.WRITE_JSON, { filePath, content });
    this.ipcRenderer.once(UI_CHANNELS.WRITE_JSON, (res) => {
      cb(res);
    });
  }

  public zipFiles({ files, folderName }: { files: string[]; folderName: string }, cb: Function) {
    this.ipcRenderer.send(UI_CHANNELS.ZIP_FILES, { files, folderName });
    this.ipcRenderer.once(UI_CHANNELS.ZIP_FILES, (e, res) => {
      cb(res);
    });
  }

  public unzipFile({ source, dest }: { source: string; dest: string }, cb: Function) {
    this.ipcRenderer.send(UI_CHANNELS.UNZIP_FILE, { source, dest });
    this.ipcRenderer.once(UI_CHANNELS.UNZIP_FILE, (e, res) => {
      cb(res);
    });
  }

  public uploadFile(
    { uri, key, qiniuToken }: { uri: string; key: string; qiniuToken: string },
    cb: Function
  ) {
    this.ipcRenderer.send(UI_CHANNELS.UPLOAD_FILE, { uri, key, qiniuToken });
    this.ipcRenderer.once(UI_CHANNELS.UPLOAD_FILE, (e, res) => {
      cb(res);
    });
  }

  public downloadFile({ uri, output }: { uri: string; output: string }, cb: Function) {
    this.ipcRenderer.send(UI_CHANNELS.DOWNLOAD_FILE, { uri, output });
    this.ipcRenderer.once(UI_CHANNELS.DOWNLOAD_FILE, (e, res) => {
      cb(res);
    });
  }

  public launchGame({ gamePiFile, gameId }: { gamePiFile: string; gameId: string }, cb: Function) {
    this.ipcRenderer.send(UI2WORKER_CHANNELS.LAUNCH_GAME, { gamePiFile, gameId });
    this.ipcRenderer.once(WORKER2UI_CHANNELS.LAUNCH_GAME_BACK, (e, res) => {
      cb(res);
    });
  }

  public launchScene(
    { scenePiFile, sceneId }: { scenePiFile: string; sceneId: number },
    cb: Function
  ) {
    this.ipcRenderer.send(UI2WORKER_CHANNELS.LAUNCH_SCENE, { scenePiFile, sceneId });
    this.ipcRenderer.once(WORKER2UI_CHANNELS.LAUNCH_SCENE_BACK, (e, res) => {
      cb(res);
    });
  }
}
