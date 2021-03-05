import { ElementRef, EventEmitter } from "@angular/core";
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
    WORKBENCH_MENU = "workbenchMenu",
    WORKBENCH_ACTIVITYBAR = "workbenchActivitybar",
    WORKBENCH_EXPLORER = "workbenchExplorer",
    WORKBENCH_STAGE = "workbenchStage",
    WORKBENCH_EXTENSIONS = "workbenchExtensions",
    WORKBENCH_STATUSBAR = "workbenchStatusbar"
}
export declare class Puzzle {
    slots: Map<string, PuzzleSlot>;
    constructor();
    registPuzzleSlot(id: string, container: ElementRef<any>): void;
    getPuzzleSlot(id: WORKBENCH_PUZZLE_BLOCK): PuzzleSlot;
}
export declare class PuzzleSlot {
    id: string;
    container: any;
    config: {};
    items: any[];
    constructor(id: string, container: ElementRef<any>);
}
