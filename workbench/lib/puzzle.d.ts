import { ElementRef, EventEmitter } from "@angular/core";
import { ContextService } from "workbench/app/core/services";
export interface IPlugin {
    name: string;
    displayName: string;
    contributes?: any;
    install: (context: any, options?: any) => void;
}
export interface WorkbenchMenu {
    open: EventEmitter<any>;
}
export declare enum WORKBENCH_PUZZLE_BLOCK {
    WORKBENCH_ACTIVITYBAR = "WorkbenchActivitybar",
    WORKBENCH_EXPLORER = "WorkbenchExplorer"
}
export declare class Puzzle {
    private contextService;
    slots: Map<string, PuzzleSlot>;
    plugins: Map<string, IPlugin>;
    constructor(contextService: ContextService);
    registPuzzleSlot(id: string, container: ElementRef<any>): void;
    getPuzzleSlot(id: string): PuzzleSlot;
    getPlugin(pluginName: string): IPlugin;
    use(plugin: IPlugin): void;
}
export declare class PuzzleSlot {
    id: string;
    container: any;
    config: {};
    items: any[];
    constructor(id: string, container: ElementRef<any>);
    injectConfig(config: any): void;
}
