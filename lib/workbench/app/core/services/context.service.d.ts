import { Type, ComponentFactory, NgZone } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Puzzle } from "../../../puzzle";
import { MessageService } from "primeng/api";
import { ElectronService } from "./electron.service";
import { EventBus } from "../../utils/index";
import { ApiService } from "../../utils/api-service";
import { User } from "../../models/user";
import { Game } from "../../models/game";
import { SocketConnection } from "../socket-connection";
import { GameConfig, SceneConfig } from "../../models/index";
export declare class ContextService {
    private messageService;
    private electronService;
    private zone;
    private _puzzle;
    activityItem$: BehaviorSubject<any>;
    entryComponentFactories: Map<string, ComponentFactory<unknown>>;
    pluginComponentFactories: Map<string, ComponentFactory<unknown>>;
    pluginComponents: Map<string, Type<any>>;
    _apiService: ApiService;
    _editedGame: any;
    _editedGameConfig: GameConfig;
    _editedSceneConfig$: BehaviorSubject<SceneConfig>;
    plugins: Map<string, any>;
    eventBus: EventBus;
    constructor(messageService: MessageService, electronService: ElectronService, zone: NgZone);
    initial(): void;
    createPuzzle(): void;
    get puzzle(): Puzzle;
    get sdk(): import("qing-web-api-sdk").IQingWebApiSdk;
    setInterceptors(user: User): void;
    get localStorage(): {
        set(key: string, data: string | object): void;
        get(key: string): any;
        remove(key: string): void;
    };
    get socket(): SocketConnection;
    get WorkbenchConfig(): {
        production: boolean;
        environment: string;
        API_URL: string;
        WEB_RESOURCE_URI: string;
        TEST_GAME_CONFIG_IP_MOBILE: string;
        TEST_GAME_CONFIG_PORT_MOBILE: number;
    };
    setActivitybar(item: any): void;
    getComponentFactory(componentName: string): ComponentFactory<unknown>;
    registComponentFactory(componentName: string, factory: ComponentFactory<unknown>): void;
    getComponent(pluginName: string): Type<any>;
    getEntryComponent(pluginId: string): ComponentFactory<unknown>;
    registEntryComponent(pluginId: string, factory: ComponentFactory<unknown>): void;
    installPlugin({ pluginName, pluginVersion }: {
        pluginName: string;
        pluginVersion: string;
    }, cb: Function): void;
    downloadGame(game: Game, cb: Function): void;
    registPlugin(pluginName: string, plugin: any): void;
    enablePlugin(pluginName: string): void;
    disablePlugin(pluginName: string): void;
    getConfigData(configFile: string, cb: Function): void;
    getPluginsFromMarket(): void;
    setUser(user: User): void;
    getUser(): any;
    setEditedGame(game: Game): void;
    setEditedScene(sceneId: number): void;
    get editedGame(): Game;
    get editedGameConfig(): GameConfig;
    get editedSceneConfig$(): BehaviorSubject<SceneConfig>;
    launchGame(game: Game, cb: Function): void;
    launchScene(game: Game, sceneId: number, cb: Function): void;
    getGameServerConfig(): {
        TEST_GAME_CONFIG_IP_MOBILE: string;
        TEST_GAME_CONFIG_PORT_MOBILE: number;
        API_URL: string;
        WEB_RESOURCE_URI: string;
    };
    success(message: any): void;
    error(message: any): void;
    showDialog(title: string, componentName: string): void;
    destroyDialog(): void;
    readDir(dir: string, cb: Function): void;
    readFile(filePath: string, cb: Function): void;
    readAppFile(uri: string, cb: Function): void;
    writeFile(content: string, cb: Function): void;
    writeJson(params: {
        filePath: string;
        content: any;
    }, cb: Function): void;
    zipFiles(params: {
        files: string[];
        folderName: string;
    }, cb: Function): void;
    unzipFile(params: {
        source: string;
        dest: string;
    }, cb: Function): void;
    uploadFile(params: {
        uri: string;
        key: string;
        qiniuToken: string;
    }, cb: Function): void;
    downloadFile(params: {
        uri: string;
        output: string;
    }, cb: Function): void;
}
