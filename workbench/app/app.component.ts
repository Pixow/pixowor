import { AfterViewInit, Component, OnDestroy, OnInit, NgZone } from "@angular/core";
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

// regist module for plugin
import * as core from "@angular/core";
import * as common from "@angular/common";
import * as forms from "@angular/forms";
import * as router from "@angular/router";
import * as rxjs from "rxjs";
import * as angularPluggable from "angular-pluggable";

export const COMMON_DEPS = {
  "@angular/core": core,
  "@angular/common": common,
  "@angular/forms": forms,
  "@angular/router": router,
  "angular-pluggable": angularPluggable,
  rxjs,
};

Object.keys(COMMON_DEPS).forEach((dep) => (window as any).define(dep, [], () => COMMON_DEPS[dep]));
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [DialogService],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  private pluginStore: PluginStore;

  constructor(
    private dialogService: DialogService,
    public context: ContextService,
    private zone: NgZone
  ) {
    this.pluginStore = createPluginStore<ContextService>(context);
  }

  ngOnInit() {}

  private activeInstalledPlugins() {
    this.zone.runOutsideAngular(() => {
      this.context.readFile(this.context.pluginConf, (res) => {
        const plugins = JSON.parse(res.data);
        console.log("AppComponent ~ plugins", plugins);

        for (const plugin of plugins) {
          (window as any).System.import(
            `http://localhost:45326/plugins/${plugin.name}/index.js`
          ).then((module) => {
            // 重新触发变更检测
            this.zone.run(() => {
              this.pluginStore.install(new module.default());
            });
          });
        }
      });
    });
  }

  ngAfterViewInit() {
    this.pluginStore.install(new RendererPlugin());
    this.pluginStore.install(new ToastPlugin());
    this.pluginStore.install(new AlertPlugin());
    this.pluginStore.install(new DialogPlugin(this.dialogService));
    this.pluginStore.install(new MenuPlugin());
    this.pluginStore.install(new ActivitybarPlugin());
    this.pluginStore.install(new SigninPlugin());

    this.pluginStore.install(new PluginsMarketPlugin(this.context));
    this.activeInstalledPlugins();
  }

  public handleClick() {
    this.pluginStore.dispatchEvent(new Event("Alert"));
  }

  ngOnDestroy() {}
}
