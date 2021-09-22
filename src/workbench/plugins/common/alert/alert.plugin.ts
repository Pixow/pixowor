import { PixoworCore, Plugin, UIEvents } from "pixowor-core";
import manifest from "./manifest.json";

export class AlertPlugin extends Plugin {
  constructor(pixoworCore: PixoworCore) {
    super(pixoworCore, manifest);
  }

  activate(): void {
    this.colorLog(`${this.name} activate, Pid: ${this.pid}`);
    this.pixoworCore.workspace.on(UIEvents.ALERT, (event) => {
      alert(event.data.message);
    });
  }

  deactivate(): void {}
}
