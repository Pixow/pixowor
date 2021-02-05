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
  constructor() {}

  addItems(items) {
    this._items = this._items.concat(items);
  }
}

export enum SlotKeys {
  WorkbenchActivitybar = "workbenchActivitybar",
  WorkbenchStage = "workbenchStage",
}
