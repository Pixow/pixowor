import { Component, Type } from "@angular/core";
import { Placements, Plugin, PixoworCore, UIEvents } from "pixowor-core";
import { SidebarComponent } from "./sidebar";
import manifest from "./manifest.json";
export class SidebarPlugin extends Plugin {
  constructor(pixoworCore: PixoworCore) {
    super(pixoworCore, manifest);
  }

  activate(): void {
    this.colorLog(`${this.name} activate, Pid: ${this.pid}`);
    this.pixoworCore.workspace.registerSlotComponent(
      Placements.SIDEBAR,
      <Type<Component>>SidebarComponent
    );
    this.pixoworCore.workspace.emit(UIEvents.INJECT_SLOT, Placements.SIDEBAR);
  }

  deactivate(): void {}
}
