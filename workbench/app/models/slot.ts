export interface ActivitybarItem {
  pluginName: string;
  title: string;
  icon: string;
}

export abstract class Slot {
  items: Array<ActivitybarItem> = [];
  constructor() {}

  addItems(items) {
    this.items = this.items.concat(items);
  }
}
