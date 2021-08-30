import { QingCore, Plugin, RendererFunctions } from "qing-core";

import { PluginsManageComponent } from "./plugins-manage.component";

export class PluginsManagePlugin extends Plugin {
  name = "插件集市";
  version = "1.0.0";

  constructor(private qingCore: QingCore) {
    super();
  }

  getDependencies(): string[] {
    return [];
  }

  activate(): void {
    this.qingCore.Invoke(
      RendererFunctions.REGIST_COMPONENT,
      "plugins-market",
      PluginsManageComponent
    );
  }

  deactivate(): void {}
}
