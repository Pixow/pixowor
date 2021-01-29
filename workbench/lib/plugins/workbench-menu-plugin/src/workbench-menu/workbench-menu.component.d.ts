import { EventEmitter, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
export declare class WorkbenchMenuComponent implements OnInit {
    items: MenuItem[];
    open: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
}
