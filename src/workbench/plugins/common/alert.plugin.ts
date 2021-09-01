import { QingCore, Plugin } from "qing-core";
export class AlertPlugin extends Plugin {
  name = "Alert";
  version = "1.0.0";
  description = "警告插件";

  constructor(private qingCore: QingCore) {
    super();
  }

  getDependencies(): string[] {
    return [];
  }

  activate(): void {
    this.qingCore.On("Alert", (event) => {
      alert(event.data.message);
    });
  }

  deactivate(): void {}
}
