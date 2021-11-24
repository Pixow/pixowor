import { Component, Type } from "@angular/core";
import { PixoworCore, Plugin, Placements, UIEvents } from "pixowor-core";
import { RenderderEvent } from "../renderer/renderer";
import { EditorAreaComponent } from "./editor-area.component";
import manifest from "./manifest.json";

export class EditorAreaPlugin extends Plugin {
  constructor(pixoworCore: PixoworCore) {
    super(pixoworCore, manifest);
  }

  activate(): void {
    this.colorLog(`${this.name} activate, Pid: ${this.pid}`);
    // this.pixoworCore.Invoke(
    //   RendererFunctions.REGIST_PLACEMENT_COMPONENTS,
    //   "editor-area-slot",
    //   EditorAreaComponent
    // );
    // this.pixoworCore.Emit(new RenderderEvent(RendererEvents.UPDATE_SLOT_VIEW, "editor-area-slot"));

    // this.pixoworCore.state.registerVariable("EditorAreaComponents", []);
    this.pixoworCore.workspace.registerSlotComponent(
      Placements.EDITORAREA,
      <Type<Component>>EditorAreaComponent
    );

    this.pixoworCore.workspace.emit(UIEvents.INJECT_SLOT, Placements.EDITORAREA);
  }

  deactivate(): void { }
}
