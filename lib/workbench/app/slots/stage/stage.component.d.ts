import { OnInit, ViewContainerRef } from "@angular/core";
import { Slot } from "../../models/slot";
import { ContextService } from "../../core/services/index";
import { MessageService } from "primeng/api";
export declare class StageComponent extends Slot implements OnInit {
    private contextService;
    private messageService;
    types: {
        title: string;
        for: string;
    }[];
    sceneEditor: ViewContainerRef;
    constructor(contextService: ContextService, messageService: MessageService);
    ngOnInit(): void;
    createSceneEditor(): void;
    registComponent(componentName: any): void;
    renderComponent(componentName: string): void;
}
