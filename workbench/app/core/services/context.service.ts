import * as fsa from "fs-extra";

import { Compiler, Injectable, Injector, Type, NgModuleFactory, ComponentFactory } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { QingWebApiService } from "workbench/app/core/services";
import { ActivitybarItem, AppConfig } from "workbench/types/typing";
import { Puzzle } from "workbench/puzzle";
import { DynamicInjector } from "workbench/app/models";
import { LocalStorageService } from "workbench/app/core/services";
import { WorkbenchConfig } from "workbench/environments/environment";
import { ElectronService } from "./electron.service";
import { HttpClient } from "@angular/common/http";
import { PluginConfig } from "workbench/app/models";

export interface IContextService {
  activityItem$: any;
  pluginComponentFactories: any;

  initial(): void;

  setActivitybar(item: any): void;

  getComponentFactory(moduleName: string): any;

  loadModule(moduleName: string, path: any): void;
}

@Injectable()
export class ContextService implements IContextService {
  private _puzzle: Puzzle;
  activityItem$ = new BehaviorSubject(null);
  pluginComponentFactories = new Map<string, ComponentFactory<unknown>>();
  pluginComponents = new Map<string, Type<any>>();

  constructor(
    private http: HttpClient,
    private compiler: Compiler,
    private electronService: ElectronService,
    private injector: Injector
  ) {
    console.log("ContextService init");
  }

  public getPluginConfigs() {
    return this.http.get<PluginConfig[]>("plugins-repo/plugins.config.json");
    // fsa.readJson(this.electronService.appPath);
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

  public setActivitybar(item: ActivitybarItem) {
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
