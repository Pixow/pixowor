import { PixoworCore, Plugin, UIEvents, QEvent } from "pixowor-core";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { Component, Type } from "@angular/core";
import manifest from "./manifest.json";

export class DialogPlugin extends Plugin {
  private ref: DynamicDialogRef;

  constructor(pixoworCore: PixoworCore) {
    super(pixoworCore, manifest);
  }

  activate(): void {
    this.colorLog(`${this.name} activate, Pid: ${this.pid}`);
    this.pixoworCore.workspace.on(UIEvents.OPEN_DIALOG, (args) => {
      console.log(
        "🚀 ~ file: dialog.plugin.ts ~ line 21 ~ DialogPlugin ~ this.pixoworCore.workspace.on ~ args",
        args
      );
      const { componentName, config } = args;

      const component = this.pixoworCore.state.getComponent(componentName);
      this.ref = this.pixoworCore.service
        .getService<DialogService>(DialogService)
        .open(<Type<Component>>component, config || {});
    });

    this.pixoworCore.workspace.on(UIEvents.CLOSE_DIALOG, () => {
      this.ref.close();
    });
  }

  deactivate(): void {
    if (this.ref) {
      this.ref = null;
    }
  }
}
