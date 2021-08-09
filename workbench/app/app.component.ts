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
import { StagePlugin } from "plugins/ui/stage/stage.plugin";
import { StatusbarPlugin } from "plugins/ui/statusbar/statusbar.plugin";

// regist module for plugin
import * as core from "@angular/core";
import * as common from "@angular/common";
import * as forms from "@angular/forms";
import * as router from "@angular/router";
import * as rxjs from "rxjs";
import * as angularPluggable from "angular-pluggable";
import * as primengApi from "primeng/api";
import * as primengMenu from "primeng/menu";
import * as primengTree from "primeng/tree";
import * as primengAccordion from "primeng/accordion";
import * as primengContextmenu from "primeng/contextmenu";
import * as moment from "moment";
import * as gameCore from "@PixelPai/game-core";
import * as shortid from "shortid";
import * as gameCapsule from "game-capsule";
import * as ngxMonacoEditor from "@materia-ui/ngx-monaco-editor";

export const COMMON_DEPS = {
  "@angular/core": core,
  "@angular/common": common,
  "@angular/forms": forms,
  "@angular/router": router,
  "angular-pluggable": angularPluggable,
  "primeng/api": primengApi,
  "primeng/menu": primengMenu,
  "primeng/tree": primengTree,
  "primeng/accordion": primengAccordion,
  "primeng/contextmenu": primengContextmenu,
  moment: moment,
  rxjs,
  "@PixelPai/game-core": gameCore,
  shortid,
  "game-capsule": gameCapsule,
  "@materia-ui/ngx-monaco-editor": ngxMonacoEditor,
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
      const readPluginConf = () => {
        this.context.readFile(this.context.pluginConf, { encoding: "utf8" }, (res) => {
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
      };

      if (!this.context.isFileExists(this.context.pluginConf)) {
        this.context.writeJson(this.context.pluginConf, [], () => {
          readPluginConf();
        });
      } else {
        readPluginConf();
      }
    });
  }

  ngAfterViewInit() {
    this.pluginStore.install(new RendererPlugin());
    this.pluginStore.install(new ToastPlugin());
    this.pluginStore.install(new AlertPlugin());
    this.pluginStore.install(new DialogPlugin(this.dialogService));
    this.pluginStore.install(new MenuPlugin());
    this.pluginStore.install(new ActivitybarPlugin());
    this.pluginStore.install(new StatusbarPlugin());
    this.pluginStore.install(new StagePlugin());
    this.pluginStore.install(new SigninPlugin());

    this.pluginStore.install(new PluginsMarketPlugin(this.context));
    this.activeInstalledPlugins();

    // TODO: 各个插件的观测变量在插件内部注册
    // 注册观测变量
    this.pluginStore.registObserver("game");
  }

  ngOnDestroy() {}
}
