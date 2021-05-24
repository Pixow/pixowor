import { NgZone, OnDestroy, OnInit, ViewContainerRef } from "@angular/core";
import { Slot } from "../../models/slot";
import { ContextService } from "../../core/services/index";
export declare class StageComponent extends Slot implements OnInit, OnDestroy {
    private contextService;
    private ngZone;
    private cdInterval;
    types: {
        title: string;
        for: string;
    }[];
    stage: ViewContainerRef;
    constructor(contextService: ContextService, ngZone: NgZone);
    ngOnInit(): void;
    renderComponent(componentName: string): void;
    ngOnDestroy(): void;
}
