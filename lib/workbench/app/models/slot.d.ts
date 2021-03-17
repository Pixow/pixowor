import { ComponentFactory } from "@angular/core";
export interface ActivitybarItem {
    id: string;
    title: string;
    icon: string;
}
export interface ExplorerItem {
    component: string;
}
export declare abstract class Slot {
    protected _items: Array<ActivitybarItem | ExplorerItem>;
    private _pluginComponentFactories;
    constructor();
    addItems(items: any): void;
    registComponentFactory(componentName: string, factory: ComponentFactory<unknown>): void;
    getComponentFactory(componentName: string): ComponentFactory<unknown>;
}
export declare enum SlotKeys {
    WorkbenchActivitybar = "workbenchActivitybar",
    WorkbenchExplorer = "workbenchExplorer",
    WorkbenchStage = "workbenchStage",
    WorkbenchExtensions = "workbenchExtensions",
    workbenchStatusbar = "workbenchStatusbar"
}
