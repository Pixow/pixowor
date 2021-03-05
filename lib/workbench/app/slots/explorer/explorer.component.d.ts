import { OnInit, ViewContainerRef } from "@angular/core";
import { Slot } from "../../models/slot";
import { ContextService } from "../../core/services/index";
import { MessageService } from "primeng/api";
export declare class ExplorerComponent extends Slot implements OnInit {
    private contextService;
    private messageService;
    anchor: ViewContainerRef;
    constructor(contextService: ContextService, messageService: MessageService);
    ngOnInit(): void;
    createComponent(pluginId: string): void;
}
