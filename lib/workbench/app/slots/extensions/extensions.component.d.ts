import { OnInit, ViewContainerRef } from "@angular/core";
import { Slot } from "../../models/slot";
import { ContextService } from "../../core/services/index";
import { MessageService } from "primeng/api";
export declare class ExtensionsComponent extends Slot implements OnInit {
    private contextService;
    private messageService;
    types: {
        title: string;
        for: string;
    }[];
    extensions: ViewContainerRef;
    constructor(contextService: ContextService, messageService: MessageService);
    ngOnInit(): void;
    renderComponent(componentName: string): void;
}
