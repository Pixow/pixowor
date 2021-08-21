import {
  ChangeDetectorRef,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  NgModule,
  OnInit,
} from "@angular/core";
import { IPlugin, PluginStore, usePluginStore, Event, FunctionNames } from "angular-pluggable";
import { MessageService } from "primeng/api";
import { ToastModule } from "primeng/toast";

@Component({
  selector: "toast",
  template: '<p-toast key="globalMessage" position="top-center"></p-toast>',
})
export class ToastPluginComponent implements OnInit {
  private pluginStore: PluginStore = usePluginStore();
  constructor(private messageService: MessageService, private ref: ChangeDetectorRef) {}

  ngOnInit() {
    this.pluginStore.addEventListener("Toast", (event: Event) => {
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
})
export class ToastPluginModule {}

export class ToastPlugin implements IPlugin {
  pluginStore: PluginStore;
  title = "toast";
  id = "toast";

  getPluginName(): string {
    return "toast@1.0.0";
  }

  getDependencies(): string[] {
    return [];
  }

  init(pluginStore: PluginStore): void {
    this.pluginStore = pluginStore;
  }

  activate(): void {
    this.pluginStore.execFunction(FunctionNames.RENDERER_ADD, "toast", ToastPluginComponent);
  }

  deactivate(): void {}
}
