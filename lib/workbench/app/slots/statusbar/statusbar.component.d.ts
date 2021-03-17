import { OnInit, ViewContainerRef } from "@angular/core";
import { Slot } from "../../models/slot";
import { ContextService } from "../../core/services/index";
import { MessageService } from "primeng/api";
export declare class StatusbarComponent extends Slot implements OnInit {
    private contextService;
    private messageService;
    types: {
        title: string;
        for: string;
    }[];
    statusbar: ViewContainerRef;
    constructor(contextService: ContextService, messageService: MessageService);
    ngOnInit(): void;
    registComponent(componentName: any): void;
    renderComponent(componentName: string): void;
}
