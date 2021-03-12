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
    _currentGame: Game;
    eventBus: EventBus;
    constructor(messageService: MessageService, electronService: ElectronService, zone: NgZone);
    initial(): void;
    createPuzzle(): void;
    get puzzle(): Puzzle;
    get sdk(): import("qing-web-api-sdk").IQingWebApiSdk;
    get localStorage(): {
        set(key: string, data: string | object): void;
        get(key: string): any;
        remove(key: string): void;
    };
    get socket(): SocketConnection;
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
    enablePlugin(pluginName: string): void;
    disablePlugin(pluginName: string): void;
    getConfigData(configFile: string, cb: Function): void;
    getPluginsFromMarket(): void;
    setUser(user: User): void;
    getUser(): any;
    setCurrentGame(game: Game): void;
    getCurrentGame(): Game;
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
