import { EventEmitter, OnInit } from "@angular/core";
import { OrderCondition } from "workbench/types/typing";
export declare class ResmanagerFilterComponent implements OnInit {
    orderConditions: OrderCondition[];
    orderValue: OrderCondition;
    searchValue: string;
    handleOrder: EventEmitter<any>;
    handleSearch: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    order(): void;
    search(): void;
}
