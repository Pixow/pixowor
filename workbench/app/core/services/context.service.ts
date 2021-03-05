import { Injectable, Type, ComponentFactory, NgZone } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import * as url from "url";
import * as path from "path";
// 不能使用 workbench，打包的时候会引入workbench/service/index.ts导入的所有模块
import { Puzzle } from "workbench/puzzle";
import { MessageService } from "primeng/api";
import { ElectronService } from "./electron.service";
import { Component } from "@angular/core";
import { AppComponent } from "workbench/app/app.component";
import { USER_STORAGE_KEY } from "public_api";

import { LocalStorage, EventBus } from "workbench/app/utils";
import { ApiService } from "workbench/app/utils/api-service";
import { WorkbenchConfig } from "workbench/environments/environment";
import { PLUGINS_CONFIG_FILE, PLUGINS_FOLDER, PLUGINS_WEB_URI } from "workbench/consts";
import { ModuleLoader } from "workbench/app/module-loader";
import { User } from "workbench/app/models/user";

@Injectable({
  providedIn: "root",
})
export class ContextService {
  private _puzzle: Puzzle;
  activityItem$ = new BehaviorSubject(null);
  entryComponentFactories = new Map<string, ComponentFactory<unknown>>();
  pluginComponentFactories = new Map<string, ComponentFactory<unknown>>();
  pluginComponents = new Map<string, Type<any>>();
  _apiService: ApiService;

  eventBus: EventBus;

  // _loader: ModuleLoader;

  constructor(
    private messageService: MessageService,
    private electronService: ElectronService,
    private zone: NgZone
  ) {
    console.log("ContextService init");
    this._apiService = new ApiService();

    this.eventBus = new EventBus();
  }

  public initial() {
    console.log("Plugin use workbench context success.");
  }

  public createPuzzle() {
    this._puzzle = new Puzzle();
  }

  public get puzzle() {
    return this._puzzle;
  }

  // 为context 提供 webapi sdk
  public get sdk() {
    return this._apiService.sdk;
  }

  public get localStorage() {
    return LocalStorage;
  }

  public setActivitybar(item: any) {
    this.activityItem$.next(item);
  }

  public getComponentFactory(componentName: string) {
    console.log("this.pluginComponentFactor: ", this.pluginComponentFactories);
    return this.pluginComponentFactories.get(componentName);
  }

  public registComponentFactory(componentName: string, factory: ComponentFactory<unknown>) {
    this.pluginComponentFactories.set(componentName, factory);
  }

  public getComponent(pluginName: string) {
    return this.pluginComponents.get(pluginName);
  }

  public getEntryComponent(pluginId: string) {
    return this.entryComponentFactories.get(pluginId);
  }

  public registEntryComponent(pluginId: string, factory: ComponentFactory<unknown>) {
    this.entryComponentFactories.set(pluginId, factory);
  }

  // 插件系统接口

  public installPlugin(
    { pluginName, pluginVersion }: { pluginName: string; pluginVersion: string },
    cb: Function
  ) {
    const zipFileName = `${pluginName}_${pluginVersion}.zip`;
    const uri = url.resolve(WorkbenchConfig.WEB_RESOURCE_URI, zipFileName);
    const temp = this.electronService.remote.app.getPath("temp");
    const output = url.resolve(temp, zipFileName);

    const appPath =
      WorkbenchConfig.environment === "DEVELOPMENT"
        ? this.electronService.appPath
        : this.electronService.appDataPath;

    this.downloadFile({ uri, output }, () => {
      const pluginFolder = path.join(appPath, `${PLUGINS_FOLDER}/${pluginName}`);
      const pluginConfig = path.join(appPath, PLUGINS_CONFIG_FILE);
      this.unzipFile({ source: output, dest: pluginFolder }, () => {
        this.readFile(path.join(pluginFolder, "package.json"), (res) => {
          const pkg = JSON.parse(res.data);

          const newPlugin = {
            name: pkg.name,
            moduleBundlePath: url.resolve(
              PLUGINS_WEB_URI,
              `${PLUGINS_FOLDER}/${pluginName}/bundle.js`
            ),
          };

          this.getConfigData(PLUGINS_CONFIG_FILE, ({ data }) => {
            const config = JSON.parse(data);
            config.push(newPlugin);
            this.writeJson({ filePath: pluginConfig, content: config }, () => {
              // create plugin
              AppComponent.instance.createPlugin((newPlugin as unknown) as any);
              cb();
            });
          });
        });
      });
    });
  }

  public downloadGame(gameId: string) {
    const gameFileName = "";
    const uri = url.resolve(WorkbenchConfig.WEB_RESOURCE_URI, gameFileName);
  }

  public enablePlugin(pluginName: string) {}

  public disablePlugin(pluginName: string) {}

  public getConfigData(configFile: string, cb: Function) {
    if (WorkbenchConfig.environment === "DEVELOPMENT") {
      this.electronService.readAppFile(configFile, cb);
    } else {
      this.electronService.readAppDataFile(configFile, cb);
    }
  }

  public getPluginsFromMarket() {}

  public setUser(user: User) {
    this.localStorage.set(USER_STORAGE_KEY, user);
    this._apiService.setInterceptors(user);
  }

  public getUser() {
    return LocalStorage.get(USER_STORAGE_KEY);
  }

  // ----------- UI ---------------
  public success(message) {
    this.zone.run(() => {
      this.messageService.add({
        key: "globalMessage",
        severity: "success",
        detail: message,
      });
    });
  }

  public error(message) {
    this.zone.run(() => {
      this.messageService.add({
        key: "globalMessage",
        severity: "error",
        detail: message,
      });
    });
  }

  public showDialog(title: string, componentName: string) {
    AppComponent.instance.showDialog(title, componentName);
  }

  public destroyDialog() {
    AppComponent.instance.destroyDialog();
  }

  // ------------- File System ---------------
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
    console.log(
      "🚀 ~ file: context.service.ts ~ line 192 ~ ContextService ~ downloadFile ~ params",
      params
    );
    this.electronService.downloadFile(params, cb);
  }
}
