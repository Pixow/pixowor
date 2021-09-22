import { Plugin } from "pixowor-core";

export class WidgetbarPlugin extends Plugin {
  name = "Widgetbar";
  version = "1.0.0";
  description = "[插槽]扩展面板";

  activate(): void {
    this.colorLog(`${this.name} activate, Pid: ${this.pid}`);
  }

  deactivate(): void {}
}
