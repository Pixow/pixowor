import { Plugin, QingCore, RendererFunctions } from "qing-core";
import { SidebarComponent } from "./sidebar";

export class SidebarPlugin extends Plugin {
  name = "Sidebar";
  version = "1.0.0";
  description = "侧边栏";

  constructor(private qingCore: QingCore) {
    super();
  }

  getDependencies(): string[] {
    return [];
  }

  activate(): void {
    this.qingCore.Invoke(RendererFunctions.REGIST_COMPONENT, "sidebar", SidebarComponent);
  }

  deactivate(): void {}
}
