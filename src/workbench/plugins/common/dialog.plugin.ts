import { QingCore, Plugin, Event, UIEvents, RendererFunctions } from "qing-core";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";

export class DialogPlugin extends Plugin {
  name = "Dialog";
  version = "1.0.0";
  description = "弹出框插件";

  private ref: DynamicDialogRef;

  constructor(private qingCore: QingCore) {
    super();
  }

  getDependencies(): string[] {
    return [];
  }

  activate(): void {
    this.qingCore.On(UIEvents.OPEN_DIALOG, (event: Event) => {
      const component = this.qingCore.Invoke(
        RendererFunctions.GET_COMPONENT,
        event.data.componentName
      );
      this.ref = this.qingCore
        .GetService<DialogService>(DialogService)
        .open(component, (event.data as any).config || {});
    });

    this.qingCore.On(UIEvents.CLOSE_DIALOG, (event: Event) => {
      this.ref.close();
    });
  }

  deactivate(): void {}
}
