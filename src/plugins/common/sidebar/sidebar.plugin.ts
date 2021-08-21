import { Plugin, QingCore } from "qing-core";
import { Inject } from "typedi";
import { RendererFunctions } from "../renderer/renderer.component";
import { SidebarComponent } from "./sidebar";

export class SidebarPlugin extends Plugin {
  @Inject() qingCore: QingCore;
  title = "侧边栏";

  getPluginName(): string {
    return "sidebar@1.0.0";
  }

  getDependencies(): string[] {
    return [];
  }

  activate(): void {
    this.qingCore.Invoke(RendererFunctions.ADD, "sidebar", SidebarComponent);
  }

  deactivate(): void {}
}
