import { Component, Type } from "@angular/core";
import { Placements, Plugin, PixoworCore, UIEvents } from "pixowor-core";
import manifest from "./manifest.json";
import { WidgetbarComponent } from "./widgetbar.component";

export class WidgetbarPlugin extends Plugin {
  constructor(pixoworCore: PixoworCore) {
    super(pixoworCore, manifest);
  }

  activate(): void {
    this.colorLog(`${this.name} activate, Pid: ${this.pid}`);
    this.pixoworCore.workspace.registerSlotComponent(
      Placements.WIDGETBAR,
      <Type<Component>>WidgetbarComponent
    );
    this.pixoworCore.workspace.emit(UIEvents.INJECT_SLOT, Placements.WIDGETBAR);
  }

  deactivate(): void {}
}
