import { Injectable } from "@angular/core";
import * as url from "url";
import * as path from "path";
import { ElectronService } from "./electron.service";

import { SocketConnection } from "workbench/app/core/socket-connection";

@Injectable({
  providedIn: "root",
})
export class ContextService {
  constructor(private electronService: ElectronService) {
    console.log("ContextService init");
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
    this.electronService.readFile(filePath, cb);
  }

  readAppFile(uri: string, cb: Function) {
    this.electronService.readAppFile(uri, cb);
  }

  writeFile(content: string, cb: Function) {
    this.electronService.writeFile(content, cb);
  }

  writeJson(params: { filePath: string; content: any }, cb: Function) {
    this.electronService.writeJson(params, cb);
  }

  zipFiles(params: { files: string[]; folderName: string }, cb: Function) {
    this.electronService.zipFiles(params, cb);
  }

  unzipFile(params: { source: string; dest: string }, cb: Function) {
    this.electronService.unzipFile(params, cb);
  }

  uploadFile(params: { uri: string; key: string; qiniuToken: string }, cb: Function) {
    this.electronService.uploadFile(params, cb);
  }

  downloadFile(params: { uri: string; output: string }, cb: Function) {
    this.electronService.downloadFile(params, cb);
  }
}
