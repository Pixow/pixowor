import { Injectable, Type, ComponentFactory, NgZone } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
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
import { Game } from "workbench/app/models/game";
import { SocketConnection } from "workbench/app/core/socket-connection";
import { GameConfig, PluginConfig, SceneConfig } from "workbench/app/models";

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
  _editedGame = null;
  _editedGameConfig: GameConfig;
  _editedSceneConfig$: BehaviorSubject<SceneConfig> = new BehaviorSubject(null);
  plugins = new Map<string, any>();
  _loader = new ModuleLoader();

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

    this.electronService.ipcRenderer.on("message-from-worker", (event, arg) => {});
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

  public setInterceptors(user: User) {
    this._apiService.setInterceptors(user);
  }

  public get localStorage() {
    return LocalStorage;
  }

  public get socket() {
    return SocketConnection.getInstance();
  }

  public get WorkbenchConfig() {
    return WorkbenchConfig;
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

  // public async createPlugin(plugin: PluginConfig) {
  //   const module = await loader.load(plugin.moduleBundlePath);
  //   const config = module.config;
  //   this.registPlugin(module.config.name, module);

  //   console.log("🚀 ~ file: app.component.ts ~ line 153 ~ AppComponent ~ module", module);

  //   const moduleFactory = await this.compiler.compileModuleAsync(module[config.moduleName]);

  //   // 注入context
  //   const map = new WeakMap();
  //   map.set(ContextService, this.contextService);
  //   const moduleRef = moduleFactory.create(new DynamicInjector(this.injector, map));

  //   // 注册 components
  //   for (const componentName of config.components) {
  //     const componentProvider = moduleRef.injector.get(componentName);
  //     const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(
  //       componentProvider
  //     );
  //     this.contextService.registComponentFactory(componentName, componentFactory);
  //   }

  //   this.ngZone.run(() => {
  //     this.injectToSlot(config);
  //     // 执行plugin active 方法
  //     if (module.active) {
  //       module.active(this.contextService);
  //     }
  //   });
  // }

  // 插件系统接口
  public installPlugin(
    { pluginName, pluginVersion }: { pluginName: string; pluginVersion: string },
    cb: Function
  ) {
    const zipFileName = `${pluginName}_${pluginVersion}.zip`;
    const uri = url.resolve(WorkbenchConfig.WEB_RESOURCE_URI, zipFileName);
    const output = url.resolve(this.electronService.tempPath, zipFileName);

    // TODO: 只使用appDataPath
    const appPath =
      WorkbenchConfig.environment === "DEVELOPMENT"
        ? this.electronService.appPath
        : this.electronService.userDataPath;

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
              AppComponent.instance.createPlugin(newPlugin as unknown as any);
              cb();
            });
          });
        });
      });
    });
  }

  public downloadGame(game: Game, cb: Function) {
    console.log(
      "🚀 ~ file: context.service.ts ~ line 139 ~ ContextService ~ downloadGame ~ game",
      game
    );
    const tempZipFileName = game.getTempZipFileName();
    const uri = game.getGameZipUri();
    const output = url.resolve(this.electronService.tempPath, tempZipFileName);

    this.downloadFile({ uri, output }, () => {
      console.log("userDataPath: ", this.electronService.userDataPath);
      console.log("appDataPath: ", this.electronService.appDataPath);

      const dest = path.join(
        this.electronService.userDataPath,
        `${game.owner.username}/game/${game._id}`
      );
      this.unzipFile({ source: output, dest }, () => {
        // 读取 ${gameId}/package.json 中的
        // elements: {
        //   "xxxxx": 0.0.1
        // },
        // terrains: {
        //   "xxxxx": 0.0.2
        // }
        // 然后下载对应资源

        cb();
      });
    });
  }

  public registPlugin(pluginName: string, plugin) {
    this.plugins.set(pluginName, plugin);
  }

  public enablePlugin(pluginName: string) {
    const plugin = this.plugins.get(pluginName);
    if (plugin.active) {
      plugin.active(this);
    }
  }

  public disablePlugin(pluginName: string) {
    const plugin = this.plugins.get(pluginName);
    if (plugin.deactive) {
      plugin.deactive(this);
    }
  }

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

  public setEditedGame(game: Game) {
    this._editedGame = game;
    this._editedGameConfig = new GameConfig(game);

    this.launchGame(game, ({ payload }) => {
      this._editedGameConfig.deserialize(payload.buffer);

      const firstScene = this._editedGameConfig.capsule.root.scenes[0];

      this.launchScene(game, firstScene.id, ({ payload }) => {
        const sceneConfig = new SceneConfig(game);
        sceneConfig.deserialize(payload.buffer);
        sceneConfig.generateSceneTree();
        this._editedSceneConfig$.next(sceneConfig);
      });
    });
  }

  public setEditedScene(sceneId: number) {
    this.launchScene(this._editedGame, sceneId, ({ payload }) => {
      const sceneConfig = this._editedSceneConfig$.getValue();
      sceneConfig.deserialize(payload.buffer);
      sceneConfig.generateSceneTree();
      this._editedSceneConfig$.next(sceneConfig);
    });
  }

  public get editedGame(): Game {
    return this._editedGame;
  }

  public get editedGameConfig(): GameConfig {
    return this._editedGameConfig;
  }

  public get editedSceneConfig$(): BehaviorSubject<SceneConfig> {
    return this._editedSceneConfig$;
  }

  public launchGame(game: Game, cb: Function) {
    this.electronService.launchGame({ gamePiFile: game.gamePiFile, gameId: game._id }, cb);
  }

  public launchScene(game: Game, sceneId: number, cb: Function) {
    this.electronService.launchScene(
      { scenePiFile: game.getScenePiFile(sceneId), sceneId: sceneId },
      cb
    );
  }

  public getGameServerConfig() {
    const { TEST_GAME_CONFIG_IP_MOBILE, TEST_GAME_CONFIG_PORT_MOBILE, API_URL, WEB_RESOURCE_URI } =
      WorkbenchConfig;

    return {
      TEST_GAME_CONFIG_IP_MOBILE,
      TEST_GAME_CONFIG_PORT_MOBILE,
      API_URL,
      WEB_RESOURCE_URI,
    };
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
    console.log(
      "🚀 ~ file: context.service.ts ~ line 192 ~ ContextService ~ downloadFile ~ params",
      params
    );
    this.electronService.downloadFile(params, cb);
  }
}
