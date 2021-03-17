import { ComponentFactory, OnInit, ViewContainerRef } from "@angular/core";
import { Slot } from "../../models/slot";
import { ContextService } from "../../core/services/index";
export declare class ExplorerComponent extends Slot implements OnInit {
    private contextService;
    anchor: ViewContainerRef;
    constructor(contextService: ContextService);
    pluginComponentFactories: Map<string, ComponentFactory<unknown>>;
    ngOnInit(): void;
    renderComponent(componentName: string): void;
}
