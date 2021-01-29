import { OnInit } from "@angular/core";
export interface TabItem {
    title: string;
}
export declare class ResmanagerTabsComponent implements OnInit {
    activeIndex: number;
    items: {
        title: string;
    }[];
    constructor();
    ngOnInit(): void;
    activeTab(index: number): void;
    handleChange(): void;
}
