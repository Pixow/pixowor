import { Component, ElementRef, Type } from "@angular/core";
import { IPlugin } from "types/index";
import { ContextService } from "workbench/app/core/services";

export enum WORKBENCH_PUZZLE_BLOCK {
  WORKBENCH_ACTIVITYBAR = "WorkbenchActivitybar",
  WORKBENCH_EXPLORER = "WorkbenchExplorer",
}

export class Puzzle {
  slots: Map<string, PuzzleSlot> = new Map();
  plugins: Map<string, IPlugin> = new Map();

  constructor(private contextService: ContextService) {}

  registPuzzleSlot(id: string, container: ElementRef<any>) {
    const block = new PuzzleSlot(id, container);
    if (!this.slots.has(block.id)) {
      this.slots.set(block.id, block);
    }
  }

  getPuzzleSlot(id: string) {
    return this.slots.get(id);
  }

  getPlugin(pluginName: string) {
    return this.plugins.get(pluginName);
  }

  use(plugin: IPlugin) {
    if (plugin.name && this.plugins.has(plugin.name)) {
      throw new Error(`Plugin ${plugin.name} already in use`);
    }

    this.plugins.set(plugin.name, plugin);

    // 注入 workbench 上下文
    plugin.install(this.contextService);

    if (!plugin.contributes) return;

    if (plugin.contributes && typeof plugin.contributes === "string") {
      const slot = this.slots.get(plugin.contributes);
    } else {
      for (const slotName of Object.keys(plugin.contributes)) {
        const config = plugin.contributes[slotName];
        const slot = this.slots.get(slotName);

        if (slot) {
          slot.injectConfig(config);
        }
      }
    }
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

  injectConfig(config) {
    // this.config = Object.assign(this.config, config);
    this.items = this.items.concat(config);

    setTimeout(() => {
      this.container.items = this.items;
    });
  }
}
