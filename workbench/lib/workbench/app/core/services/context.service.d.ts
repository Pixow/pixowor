import { Compiler, Injector, Type, ComponentFactory } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LocalStorageService } from "./local-storage.service";
import { Puzzle } from "workbench/puzzle";
export interface IContextService {
    activityItem$: any;
    pluginComponentFactories: any;
    initial(): void;
    setActivitybar(item: any): void;
    getComponentFactory(moduleName: string): any;
    loadModule(moduleName: string, path: any): void;
}
export declare class ContextService implements IContextService {
    private compiler;
    private injector;
    private _puzzle;
    activityItem$: BehaviorSubject<any>;
    pluginComponentFactories: Map<string, ComponentFactory<unknown>>;
    pluginComponents: Map<string, Type<any>>;
    constructor(compiler: Compiler, injector: Injector);
    initial(): void;
    createPuzzle(): void;
    get puzzle(): Puzzle;
    get sdk(): import("qing-web-api-sdk").IQingWebApiSdk;
    get localStorage(): LocalStorageService;
    setActivitybar(item: any): void;
    getComponentFactory(pluginName: string): ComponentFactory<unknown>;
    getComponent(pluginName: string): Type<any>;
    triggerRender(pluginName: string): void;
    loadModule(pluginName: string, path: any): Promise<unknown>;
}
