import { Injectable, Type, ComponentFactory, NgZone } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import * as url from "url";
import * as path from "path";
// 不能使用 workbench，打包的时候会引入workbench/service/index.ts导入的所有模块
import { MessageService } from "primeng/api";
import { ElectronService } from "./electron.service";

import { EventBus } from "workbench/app/utils";
import { WorkbenchConfig } from "workbench/environments/environment";
import { User } from "workbench/app/models/user";
import { Game } from "workbench/app/models/game";
import { SocketConnection } from "workbench/app/core/socket-connection";
import { USER_STORAGE_KEY } from "workbench/consts";

@Injectable({
  providedIn: "root",
})
export class ContextService {
  activityItem$ = new BehaviorSubject(null);
  entryComponentFactories = new Map<string, ComponentFactory<unknown>>();
  pluginComponentFactories = new Map<string, ComponentFactory<unknown>>();
  pluginComponents = new Map<string, Type<any>>();
  _editedGame = null;
  plugins = new Map<string, any>();

  eventBus: EventBus;

  // _loader: ModuleLoader;

  constructor(
    private messageService: MessageService,
    private electronService: ElectronService,
    private zone: NgZone
  ) {
    console.log("ContextService init");

    this.eventBus = new EventBus();

    this.electronService.ipcRenderer.on("message-from-worker", (event, arg) => {});
  }

  public initial() {
    console.log("Plugin use workbench context success.");
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

  // public setEditedGame(game: Game) {
  //   this._editedGame = game;
  //   this._editedGameConfig = new GameConfig(game);

  //   this.launchGame(game, ({ payload }) => {
  //     this._editedGameConfig.deserialize(payload.buffer);

  //     const firstScene = this._editedGameConfig.capsule.root.scenes[0];

  //     this.launchScene(game, firstScene.id, ({ payload }) => {
  //       const sceneConfig = new SceneConfig(game);
  //       sceneConfig.deserialize(payload.buffer);
  //       sceneConfig.generateSceneTree();
  //       this._editedSceneConfig$.next(sceneConfig);
  //     });
  //   });
  // }

  // public setEditedScene(sceneId: number) {
  //   this.launchScene(this._editedGame, sceneId, ({ payload }) => {
  //     const sceneConfig = this._editedSceneConfig$.getValue();
  //     sceneConfig.deserialize(payload.buffer);
  //     sceneConfig.generateSceneTree();
  //     this._editedSceneConfig$.next(sceneConfig);
  //   });
  // }

  // public get editedGame(): Game {
  //   return this._editedGame;
  // }

  // public get editedGameConfig(): GameConfig {
  //   return this._editedGameConfig;
  // }

  // public get editedSceneConfig$(): BehaviorSubject<SceneConfig> {
  //   return this._editedSceneConfig$;
  // }

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
