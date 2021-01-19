import { EventEmitter } from "@angular/core";

export interface IContextService {
  activityItem$: any;
  pluginComponentFactories: any;

  initial(): void;

  setActivitybar(item: any): void;

  getComponentFactory(moduleName: string): any;

  loadModule(moduleName: string, path: any): void;
}

export interface IPlugin {
  name: string;
  displayName: string;
  contributes?: any;
  install: (context: any, options?: any) => void;
}

export interface WorkbenchMenu {
  open: EventEmitter<any>;
}
