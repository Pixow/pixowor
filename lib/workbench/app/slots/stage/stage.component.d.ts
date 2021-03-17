import { NgZone, OnInit, ViewContainerRef } from "@angular/core";
import { Slot } from "../../models/slot";
import { ContextService } from "../../core/services/index";
export declare class StageComponent extends Slot implements OnInit {
    private contextService;
    private ngZone;
    types: {
        title: string;
        for: string;
    }[];
    stage: ViewContainerRef;
    constructor(contextService: ContextService, ngZone: NgZone);
    ngOnInit(): void;
    renderComponent(componentName: string): void;
}
