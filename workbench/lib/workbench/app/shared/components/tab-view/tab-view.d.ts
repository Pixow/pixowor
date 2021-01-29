import { OnInit, QueryList, EventEmitter, AfterContentInit } from "@angular/core";
export declare class TabViewNav {
    tabs: TabPanel[];
    onTabClick: EventEmitter<any>;
    onTabCloseClick: EventEmitter<any>;
    clickTab(event: any, tab: TabPanel): void;
    clickClose(event: any, tab: TabPanel): void;
}
export declare class TabPanel implements OnInit {
    header: string;
    selected: boolean;
    closable: boolean;
    constructor();
    ngOnInit(): void;
}
export declare class TabView implements AfterContentInit {
    tabs: TabPanel[];
    _activeIndex: number;
    tabPanels: QueryList<TabPanel>;
    get activeIndex(): number;
    set activeIndex(val: number);
    constructor();
    ngAfterContentInit(): void;
    initTabs(): void;
    findSelectedTab(): TabPanel;
    findTabIndex(tab: TabPanel): number;
    open(event: Event, tab: TabPanel): void;
}
export declare class TabViewModule {
}
