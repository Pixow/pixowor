import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Type,
  ViewChild,
  Compiler,
  Injector,
  ViewContainerRef,
  NgZone,
} from "@angular/core";
import { Subject } from "rxjs";
import { ContextService } from "./core/services";
import { DialogService } from "primeng/dynamicdialog";

import {
  PluginStore,
  createPluginStore,
  Event,
  RendererPlugin,
  FunctionNames,
} from "angular-pluggable";
import { AlertPlugin } from "plugins/alert.plugin";
import { MenuPlugin } from "plugins/menu/menu.plugin";
import { ToastPlugin } from "plugins/toast.plugin";
import { SigninPlugin } from "plugins/signin/signin.plugin";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [DialogService],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  private pluginStore: PluginStore = createPluginStore();

  constructor(private dialogService: DialogService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.pluginStore.install(new RendererPlugin());
    this.pluginStore.install(new ToastPlugin());
    this.pluginStore.install(new AlertPlugin());
    this.pluginStore.install(new MenuPlugin());
    this.pluginStore.install(new SigninPlugin());

    // 所有插件都能调用的全局事件
    this.pluginStore.addEventListener("ShowInDialog", (event) => {
      const component = this.pluginStore.execFunction(
        FunctionNames.RENDERER_GET_DIALOG_COMPONENT,
        (event.data as any).componentName
      );
      this.dialogService.open(component, (event.data as any).config);
    });
  }

  public handleClick() {
    this.pluginStore.dispatchEvent(new Event("Alert"));
  }

  ngOnDestroy() {}
}
