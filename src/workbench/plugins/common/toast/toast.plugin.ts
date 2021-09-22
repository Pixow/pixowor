import { ChangeDetectorRef, Component, Inject, NgModule, OnInit, Type } from "@angular/core";
import { PixoworCore, Plugin, QEvent, UIEvents, Placements } from "pixowor-core";
import { MessageService } from "primeng/api";
import { ToastModule } from "primeng/toast";
import manifest from "./manifest.json";

@Component({
  selector: "toast",
  template: '<p-toast key="globalMessage" position="top-center"></p-toast>',
})
export class ToastPluginComponent implements OnInit {
  constructor(
    @Inject(PixoworCore) private pixoworCore: PixoworCore,
    private messageService: MessageService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.pixoworCore.workspace.on(UIEvents.TOAST, (args) => {
      this.messageService.add({
        key: "globalMessage",
        severity: args.severity || "success",
        detail: args.message,
      });

      this.ref.detectChanges();
    });
  }
}

@NgModule({
  imports: [ToastModule],
  declarations: [ToastPluginComponent],
  providers: [PixoworCore],
})
export class ToastPluginModule {}

export class ToastPlugin extends Plugin {
  constructor(pixoworCore: PixoworCore) {
    super(pixoworCore, manifest);
  }

  activate(): void {
    this.colorLog(`${this.name} activate, Pid: ${this.pid}`);
    // this.pixoworCore.Invoke(
    //   RendererFunctions.REGIST_PLACEMENT_COMPONENTS,
    //   "toast-slot",
    //   ToastPluginComponent
    // );
    // this.pixoworCore.Emit(new RenderderEvent(RendererEvents.UPDATE_SLOT_VIEW, "toast-slot"));
    // this.pixoworCore.workspace.emit()

    this.pixoworCore.workspace.registerSlotComponent(
      Placements.TOAST,
      <Type<Component>>ToastPluginComponent
    );

    this.pixoworCore.workspace.emit(UIEvents.INJECT_SLOT, Placements.TOAST);
  }

  deactivate(): void {}
}
