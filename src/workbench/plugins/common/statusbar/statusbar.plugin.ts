import { Component } from "@angular/core";
import { Plugin, PixoworCore } from "pixowor-core";
import { StatusbarComponent } from "./statusbar";
import manifest from "./manifest.json";

export class StatusbarPlugin extends Plugin {
  pid = "pixowor-statusbar";
  name = "Qing Statusbar";
  author = "Qing";
  version = "1.0.0";
  description = "Qing editor statusbar";
  minAppVersion = "1.0.0";

  constructor(pixoworCore: PixoworCore) {
    super(pixoworCore, manifest);
  }

  activate(): void {
    this.colorLog(`${this.name} activate, Pid: ${this.pid}`);
    this.pixoworCore.state.registerVariable("statusbar", {});
    this.pixoworCore.state.registerComponent("statusbar", <Component>StatusbarComponent);
  }

  deactivate(): void { }
}
