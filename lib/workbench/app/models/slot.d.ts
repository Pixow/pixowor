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
    constructor();
    addItems(items: any): void;
}
export declare enum SlotKeys {
    WorkbenchActivitybar = "workbenchActivitybar",
    WorkbenchExplorer = "workbenchExplorer",
    WorkbenchStage = "workbenchStage"
}
