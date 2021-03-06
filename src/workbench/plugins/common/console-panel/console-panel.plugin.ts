import { PixoworCore, Plugin } from "pixowor-core";
import manifest from "./manifest.json";
export class ConsolePanelPlugin extends Plugin {
  constructor(pixoworCore: PixoworCore) {
    super(pixoworCore, manifest);
  }

  activate(): void {
    this.colorLog(`${this.name} activate, Pid: ${this.pid}`);
  }

  deactivate(): void {}
}
