import { OnInit, ViewContainerRef } from "@angular/core";
import { DialogService } from "primeng/dynamicdialog";
import { ContextService } from "workbench/app/core/services";
export declare class MenuComponent implements OnInit {
    private contextService;
    private dialogService;
    anchor: ViewContainerRef;
    constructor(contextService: ContextService, dialogService: DialogService);
    ngOnInit(): void;
    createComponent(factory: any): void;
}
