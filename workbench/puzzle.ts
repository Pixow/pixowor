import { Component, ElementRef, EventEmitter, Type } from "@angular/core";
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

export enum WORKBENCH_PUZZLE_BLOCK {
  WORKBENCH_MENU = "workbenchMenu",
  WORKBENCH_ACTIVITYBAR = "workbenchActivitybar",
  WORKBENCH_EXPLORER = "workbenchExplorer",
  WORKBENCH_STAGE = "workbenchStage",
  WORKBENCH_EXTENSIONS = "workbenchExtensions",
  WORKBENCH_STATUSBAR = "workbenchStatusbar",
}

export class Puzzle {
  slots: Map<string, PuzzleSlot> = new Map();

  constructor() {}

  registPuzzleSlot(id: string, container: ElementRef<any>) {
    const block = new PuzzleSlot(id, container);
    if (!this.slots.has(block.id)) {
      this.slots.set(block.id, block);
    }
  }

  getPuzzleSlot(id: WORKBENCH_PUZZLE_BLOCK) {
    return this.slots.get(id);
  }
}

export class PuzzleSlot {
  id: string;
  container: any;
  config = {};

  items = [];

  constructor(id: string, container: ElementRef<any>) {
    this.id = id;
    this.container = container;
  }
}
