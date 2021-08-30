import { Event, Plugin, QingCore, RendererFunctions } from "qing-core";
import { StatusbarComponent } from "./statusbar";

export class StatusbarPlugin extends Plugin {
  name = "Statusbar";
  version = "1.0.0";
  description = "状态栏";

  constructor(private qingCore: QingCore) {
    super();
    this.qingCore.RegistVariable(this.getPluginIdentify(), "statusbar", {});
  }

  getDependencies(): string[] {
    return [];
  }

  activate(): void {
    this.qingCore.Invoke(RendererFunctions.REGIST_COMPONENT, "statusbar", StatusbarComponent);
  }

  deactivate(): void {}
}
