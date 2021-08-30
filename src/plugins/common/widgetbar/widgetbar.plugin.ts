import { QingCore, Plugin } from "qing-core";
import { Inject } from "typedi";

export class WidgetbarPlugin extends Plugin {
  name = "Widgetbar";
  version = "1.0.0";
  description = "[插槽]扩展面板";

  getDependencies(): string[] {
    return [];
  }

  activate(): void {}

  deactivate(): void {}
}
