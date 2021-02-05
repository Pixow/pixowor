import { Type, ComponentFactory } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LocalStorageService } from "./local-storage.service";
import { Puzzle } from "../../../puzzle";
import { MessageService } from "primeng/api";
export interface IContextService {
    activityItem$: any;
    pluginComponentFactories: any;
    initial(): void;
    setActivitybar(item: any): void;
    getComponentFactory(moduleName: string): any;
}
export declare class ContextService implements IContextService {
    private messageService;
    private _puzzle;
    activityItem$: BehaviorSubject<any>;
    pluginComponentFactories: Map<string, ComponentFactory<unknown>>;
    pluginComponents: Map<string, Type<any>>;
    constructor(messageService: MessageService);
    initial(): void;
    createPuzzle(): void;
    get puzzle(): Puzzle;
    get sdk(): import("qing-web-api-sdk").IQingWebApiSdk;
    get localStorage(): LocalStorageService;
    setActivitybar(item: any): void;
    getComponentFactory(pluginName: string): ComponentFactory<unknown>;
    getComponent(pluginName: string): Type<any>;
    triggerRender(pluginName: string): void;
    registComponentFactory(pluginId: string, factory: ComponentFactory<unknown>): void;
    downloadPlugin(pluginId: string): Promise<unknown>;
    success(message: any): void;
}
