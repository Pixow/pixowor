import { Component } from "@angular/core";
import { PixoworCore, Plugin } from "pixowor-core";
import { PluginsManageComponent } from "./plugins-manage.component";
import manifest from "./manifest.json";
export class PluginsManagePlugin extends Plugin {
  constructor(pixoworCore: PixoworCore) {
    super(pixoworCore, manifest);
  }

  getDependencies(): string[] {
    return [];
  }

  activate(): void {
    this.colorLog(`${this.name} activate, Pid: ${this.pid}`);
    this.pixoworCore.state.registerComponent(
      "PluginsManage",
      <Component>PluginsManageComponent
    );
  }

  deactivate(): void { }
}
