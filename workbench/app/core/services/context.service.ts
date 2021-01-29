import { Compiler, Injectable, Injector, Type, NgModuleFactory, ComponentFactory } from "@angular/core";
import { BehaviorSubject } from "rxjs";
// 不能使用 workbench，打包的时候会引入workbench/service/index.ts导入的所有模块
import { QingWebApiService } from "./qing-web-api.service";
import { LocalStorageService } from "./local-storage.service";
import { AppConfig } from "workbench/types/typing";
import { Puzzle } from "workbench/puzzle";
import { DynamicInjector } from "workbench/app/models/dynamic-injector";
import { WorkbenchConfig } from "workbench/environments/environment";
import { PluginConfig } from "workbench/app/models/plugin-model";

export interface IContextService {
  activityItem$: any;
  pluginComponentFactories: any;

  initial(): void;

  setActivitybar(item: any): void;

  getComponentFactory(moduleName: string): any;

  loadModule(moduleName: string, path: any): void;
}

@Injectable({
  providedIn: "root",
})
export class ContextService implements IContextService {
  private _puzzle: Puzzle;
  activityItem$ = new BehaviorSubject(null);
  pluginComponentFactories = new Map<string, ComponentFactory<unknown>>();
  pluginComponents = new Map<string, Type<any>>();

  constructor(private compiler: Compiler, private injector: Injector) {
    console.log("ContextService init");
  }

  public initial() {
    console.log("Plugin use workbench context success.");
  }

  public createPuzzle() {
    this._puzzle = new Puzzle(this);
  }

  public get puzzle() {
    return this._puzzle;
  }

  // 为context 提供 webapi sdk
  public get sdk() {
    return QingWebApiService.instance.sdk;
  }

  public get localStorage() {
    return LocalStorageService.instance;
  }

  public setActivitybar(item: any) {
    this.activityItem$.next(item);
  }

  public getComponentFactory(pluginName: string) {
    return this.pluginComponentFactories.get(pluginName);
  }

  public getComponent(pluginName: string) {
    return this.pluginComponents.get(pluginName);
  }

  public triggerRender(pluginName: string) {
    const plugin = this.puzzle.getPlugin(pluginName);
    const slot = this.puzzle.getPuzzleSlot(plugin.contributes);
    const factory = this.pluginComponentFactories.get(pluginName);
    console.log("🚀 ~ file: context.service.ts ~ line 56 ~ ContextService ~ factory", factory);

    if (factory) {
      slot.container.createComponent(factory);
    }
  }

  public loadModule(pluginName: string, path: any) {
    return new Promise((resolve, reject) => {
      (path() as Promise<NgModuleFactory<any> | Type<any>>)
        .then((elementModuleOrFactory) => {
          if (elementModuleOrFactory instanceof NgModuleFactory) {
            // if ViewEngine
            return elementModuleOrFactory;
          } else {
            try {
              // if Ivy
              return this.compiler.compileModuleAsync(elementModuleOrFactory);
            } catch (err) {
              reject(err);
            }
          }
        })
        .then((moduleFactory) => {
          try {
            const map = new WeakMap();
            map.set(AppConfig, WorkbenchConfig);
            const moduleRef = moduleFactory.create(new DynamicInjector(this.injector, map));
            const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory<Type<any>>(
              moduleRef.instance.componentType
            );
            this.pluginComponentFactories.set(pluginName, componentFactory);
            this.pluginComponents.set(pluginName, moduleRef.instance.componentType);
            resolve(true);
            // do something with the module...
          } catch (err) {
            reject(err);
          }
        });
    });
  }
}
