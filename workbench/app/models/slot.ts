import { ComponentFactory } from "@angular/core";

export interface ActivitybarItem {
  id: string;
  title: string;
  icon: string;
}

export interface ExplorerItem {
  component: string;
}

export abstract class Slot {
  protected _items: Array<ActivitybarItem | ExplorerItem> = [];
  private _pluginComponentFactories: Map<string, ComponentFactory<unknown>> = new Map();
  constructor() {}

  addItems(items) {
    this._items = this._items.concat(items);
  }

  registComponentFactory(componentName: string, factory: ComponentFactory<unknown>) {
    this._pluginComponentFactories.set(componentName, factory);
  }

  getComponentFactory(componentName: string) {
    return this._pluginComponentFactories.get(componentName);
  }
}

export enum SlotKeys {
  WorkbenchActivitybar = "workbenchActivitybar",
  WorkbenchExplorer = "workbenchExplorer",
  WorkbenchStage = "workbenchStage",
  WorkbenchExtensions = "workbenchExtensions",
  workbenchStatusbar = "workbenchStatusbar",
}
