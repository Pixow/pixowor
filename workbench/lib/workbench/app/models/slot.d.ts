export interface ActivitybarItem {
    pluginName: string;
    title: string;
    icon: string;
}
export declare abstract class Slot {
    items: Array<ActivitybarItem>;
    constructor();
    addItems(items: any): void;
}
