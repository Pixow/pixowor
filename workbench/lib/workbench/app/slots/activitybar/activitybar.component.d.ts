import { AfterViewInit } from "@angular/core";
import { ContextService } from "workbench/app/core/services";
import { ActivitybarItem, Slot } from "workbench/app/models/slot";
export declare class ActivitybarComponent extends Slot implements AfterViewInit {
    private contextService;
    constructor(contextService: ContextService);
    ngAfterViewInit(): void;
    openExplorer(item: ActivitybarItem): void;
}
