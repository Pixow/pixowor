import { AfterViewInit } from "@angular/core";
import { ContextService } from "../../core/services/index";
import { ActivitybarItem, Slot } from "../../models/slot";
export declare class ActivitybarComponent extends Slot implements AfterViewInit {
    private contextService;
    constructor(contextService: ContextService);
    get items(): ActivitybarItem[];
    ngAfterViewInit(): void;
    openExplorer(item: ActivitybarItem): void;
}
