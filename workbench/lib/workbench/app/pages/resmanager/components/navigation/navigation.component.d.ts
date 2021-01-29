import { OnInit } from "@angular/core";
import { Router } from "@angular/router";
export interface NavigationItem {
    title: string;
    icon: string;
    redirect: string;
}
export declare class NavigationComponent implements OnInit {
    private router;
    activeIndex: number;
    items: NavigationItem[];
    constructor(router: Router);
    ngOnInit(): void;
    selectItem(item: NavigationItem, index: number): void;
}
