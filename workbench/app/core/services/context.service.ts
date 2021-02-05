import { Compiler, Injectable, Injector, Type, NgModuleFactory, ComponentFactory } from "@angular/core";
import { BehaviorSubject } from "rxjs";
// 不能使用 workbench，打包的时候会引入workbench/service/index.ts导入的所有模块
import { QingWebApiService } from "./qing-web-api.service";
import { LocalStorageService } from "./local-storage.service";
import { Puzzle } from "workbench/puzzle";
import { MessageService } from "primeng/api";
import { ElectronService } from "./electron.service";

export interface IContextService {
  activityItem$: any;
  pluginComponentFactories: any;

  initial(): void;

  setActivitybar(item: any): void;

  getComponentFactory(moduleName: string): any;
}

@Injectable({
  providedIn: "root",
})
export class ContextService implements IContextService {
  private _puzzle: Puzzle;
  activityItem$ = new BehaviorSubject(null);
  pluginComponentFactories = new Map<string, ComponentFactory<unknown>>();
  pluginComponents = new Map<string, Type<any>>();

  constructor(private messageService: MessageService, private electronService: ElectronService) {
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

  // public triggerRender(pluginName: string) {
  //   const plugin = this.puzzle.getPlugin(pluginName);
  //   const slot = this.puzzle.getPuzzleSlot(plugin.contributes);
  //   const factory = this.pluginComponentFactories.get(pluginName);
  //   console.log("🚀 ~ file: context.service.ts ~ line 56 ~ ContextService ~ factory", factory);

  //   if (factory) {
  //     slot.container.createComponent(factory);
  //   }
  // }

  registComponentFactory(pluginId: string, factory: ComponentFactory<unknown>) {
    this.pluginComponentFactories.set(pluginId, factory);
  }

  // 插件系统接口

  public downloadPlugin(pluginId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(1);
    });
  }

  public enablePlugin(pluginId: string) {}

  public disablePlugin(pluginId: string) {}

  public getLocalPlugins() {}

  public getPluginsFromMarket() {}

  public success(message) {
    this.messageService.add({
      key: "globalMessage",
      severity: "success",
      detail: message,
    });
  }

  public error(message) {
    this.messageService.add({
      key: "globalMessage",
      severity: "error",
      detail: message,
    });
  }

  // public loadModule(pluginName: string, path: any) {
  //   return new Promise((resolve, reject) => {
  //     (path() as Promise<NgModuleFactory<any> | Type<any>>)
  //       .then((elementModuleOrFactory) => {
  //         if (elementModuleOrFactory instanceof NgModuleFactory) {
  //           // if ViewEngine
  //           return elementModuleOrFactory;
  //         } else {
  //           try {
  //             // if Ivy
  //             return this.compiler.compileModuleAsync(elementModuleOrFactory);
  //           } catch (err) {
  //             reject(err);
  //           }
  //         }
  //       })
  //       .then((moduleFactory) => {
  //         try {
  //           const map = new WeakMap();
  //           map.set(AppConfig, WorkbenchConfig);
  //           const moduleRef = moduleFactory.create(new DynamicInjector(this.injector, map));
  //           const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory<Type<any>>(
  //             moduleRef.instance.componentType
  //           );
  //           this.pluginComponentFactories.set(pluginName, componentFactory);
  //           this.pluginComponents.set(pluginName, moduleRef.instance.componentType);
  //           resolve(true);
  //           // do something with the module...
  //         } catch (err) {
  //           reject(err);
  //         }
  //       });
  //   });
  // }
}
