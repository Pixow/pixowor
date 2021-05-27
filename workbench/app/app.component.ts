import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
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
import { AlertPlugin } from "plugins/common/alert.plugin";
import { ToastPlugin } from "plugins/common/toast.plugin";
import { DialogPlugin } from "plugins/common/dialog.plugin";
import { MenuPlugin } from "plugins/ui/menu/menu.plugin";
import { SigninPlugin } from "plugins/ui/signin/signin.plugin";
import { ActivitybarPlugin } from "plugins/ui/activitybar/activitybar.plugin";
import { PluginsMarketPlugin } from "plugins/ui/plugins-market/plugins-market.plugin";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [DialogService],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  private pluginStore: PluginStore;

  constructor(private dialogService: DialogService, public context: ContextService) {
    this.pluginStore = createPluginStore<ContextService>(context);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.pluginStore.install(new RendererPlugin());
    this.pluginStore.install(new ToastPlugin());
    this.pluginStore.install(new AlertPlugin());
    this.pluginStore.install(new DialogPlugin(this.dialogService));
    this.pluginStore.install(new MenuPlugin());
    this.pluginStore.install(new ActivitybarPlugin());
    this.pluginStore.install(new SigninPlugin());

    this.pluginStore.install(new PluginsMarketPlugin());
  }

  public handleClick() {
    this.pluginStore.dispatchEvent(new Event("Alert"));
  }

  ngOnDestroy() {}
}
