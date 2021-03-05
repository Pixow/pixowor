import { OnInit, ViewContainerRef } from "@angular/core";
import { DialogService } from "primeng/dynamicdialog";
import { ContextService } from "../../core/services/index";
import { MenuItem } from "primeng/api";
export declare class MenuComponent implements OnInit {
    private contextService;
    private dialogService;
    items: MenuItem[];
    anchor: ViewContainerRef;
    constructor(contextService: ContextService, dialogService: DialogService);
    ngOnInit(): void;
    addMenu(menu: MenuItem, index?: number): void;
}
