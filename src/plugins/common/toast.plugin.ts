import { ChangeDetectorRef, Component, NgModule, OnInit } from "@angular/core";
import { QingCore, Plugin, Event, UIEvents, RendererFunctions, RendererEvents } from "qing-core";
import { MessageService } from "primeng/api";
import { ToastModule } from "primeng/toast";
import { RenderderEvent } from "./renderer/renderer";

@Component({
  selector: "toast",
  template: '<p-toast key="globalMessage" position="top-center"></p-toast>',
})
export class ToastPluginComponent implements OnInit {
  constructor(
    private qingCore: QingCore,
    private messageService: MessageService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    console.log("Toast init");
    this.qingCore.On(UIEvents.TOAST, (event: Event) => {
      console.log(">> event: ", event);
      this.messageService.add({
        key: "globalMessage",
        severity: (event.data as any).severity || "success",
        detail: (event.data as any).message,
      });

      this.ref.detectChanges();
    });
  }
}

@NgModule({
  imports: [ToastModule],
  declarations: [ToastPluginComponent],
  providers: [QingCore],
})
export class ToastPluginModule {}

export class ToastPlugin extends Plugin {
  name = "Toast";
  version = "1.0.0";
  description = "提示插件";

  constructor(private qingCore: QingCore) {
    super();
    this.qingCore.Invoke(
      RendererFunctions.REGIST_PLACEMENT_COMPONENTS,
      "toast-slot",
      ToastPluginComponent
    );
  }

  getDependencies(): string[] {
    return [];
  }

  activate(): void {
    this.qingCore.Emit(new RenderderEvent(RendererEvents.UPDATE_SLOT_VIEW, "toast-slot"));
  }

  deactivate(): void {}
}
