import { OnInit, ViewContainerRef } from "@angular/core";
import { ContextService } from "workbench/app/core/services";
export declare class ExplorerComponent implements OnInit {
    private contextService;
    anchor: ViewContainerRef;
    constructor(contextService: ContextService);
    ngOnInit(): void;
    createComponent(pluginName: string): void;
}
