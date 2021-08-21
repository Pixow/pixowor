import { AfterViewInit, Component, OnDestroy, OnInit, NgZone } from "@angular/core";
import { Subject } from "rxjs";
import { ContextService } from "./core/services";
import { DialogService } from "primeng/dynamicdialog";
import * as path from "path";

import { QingCore, RendererPlugin } from "qing-core";

import { AlertPlugin } from "@plugins/common/alert.plugin";
import { ToastPlugin } from "@plugins/common/toast.plugin";
import { DialogPlugin } from "@plugins/common/dialog.plugin";
import { MenuPlugin } from "@plugins/common/menubar/menubar.plugin";
import { SigninPlugin } from "@plugins/ui/signin/signin.plugin";
import { ActivitybarPlugin } from "@plugins/common/sidebar/sidebar.plugin";
import { PluginsMarketPlugin } from "@plugins/ui/plugins-market/plugins-market.plugin";
import { EditorAreaPlugin } from "@plugins/common/editor-area/editor-area.plugin";
import { StatusbarPlugin } from "@plugins/common/statusbar/statusbar.plugin";

// regist module for plugin
import * as core from "@angular/core";
import * as common from "@angular/common";
import * as forms from "@angular/forms";
import * as router from "@angular/router";
import * as animations from "@angular/animations";
import * as rxjs from "rxjs";
import * as primengApi from "primeng/api";
import * as primengMenu from "primeng/menu";
import * as primengTree from "primeng/tree";
import * as primengAccordion from "primeng/accordion";
import * as primengContextmenu from "primeng/contextmenu";
import * as gameCore from "@PixelPai/game-core";
import * as gameCapsule from "game-capsule";
import * as ngxMonacoEditor from "@materia-ui/ngx-monaco-editor";
import { EreMessageChannel as msgc } from "electron-re";
import { Channels } from "@launcher/config/ipc_channel";
import { Inject } from "typedi";

export const COMMON_DEPS = {
  rxjs,
  "@angular/core": core,
  "@angular/common": common,
  "@angular/forms": forms,
  "@angular/router": router,
  "@angular/animations": animations,
  "primeng/api": primengApi,
  "primeng/tree": primengTree,
  "primeng/accordion": primengAccordion,
  "primeng/contextmenu": primengContextmenu,
  "primeng/menu": primengMenu,
  "@PixelPai/game-core": gameCore,
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
  // private pluginStore: PluginStore;
  @Inject() qingCore: QingCore;

  constructor(
    private dialogService: DialogService,
    public context: ContextService,
    private zone: NgZone
  ) {
    // this.pluginStore = createPluginStore<ContextService>(context);
  }

  ngOnInit() {
    console.log("msgc: ", msgc);
    msgc.send("app", "test", { value: "child" });

    msgc.on("test_replay", (event, resp) => {
      console.log("resp: ", resp);
    });

    const appDataPath = this.context.appPath;
    // msgc.invoke("app", Channels.READ_DIR, { dir: appDataPath }).then((res) => {
    //   console.log("READ DIR: ", res);
    // });
  }

  private activeInstalledPlugins() {
    this.zone.runOutsideAngular(() => {
      msgc
        .invoke("app", "read-file", {
          path: this.context.pluginConf,
          options: { encoding: "utf8" },
        })
        .then((res) => {
          const { error, data } = res;

          if (error !== null) {
            console.error(error);
            return;
          }

          const plugins = JSON.parse(data);
          console.log("AppComponent ~ plugins", plugins);

          for (const plugin of plugins) {
            const pluginEntry = `http://localhost:45326/plugins/${plugin.name}/index.js`;
            (window as any).System.import(pluginEntry).then((module) => {
              // 重新触发变更检测
              this.zone.run(() => {
                this.qingCore.installPlugin(new module.default());
              });
            });
          }
        });
    });
  }

  ngAfterViewInit() {
    // this.pluginStore.install(new RendererPlugin());
    // this.pluginStore.install(new ToastPlugin());
    // this.pluginStore.install(new AlertPlugin());
    // this.pluginStore.install(new DialogPlugin());
    // this.pluginStore.install(new MenuPlugin());
    // this.pluginStore.install(new ActivitybarPlugin());
    // this.pluginStore.install(new StatusbarPlugin());
    // this.pluginStore.install(new EditorAreaPlugin());
    // this.pluginStore.install(new SigninPlugin());

    // this.pluginStore.install(new PluginsMarketPlugin(this.context));
    this.qingCore.installPlugin(new RendererPlugin());
    this.qingCore.installPlugin(new ToastPlugin());
    this.qingCore.installPlugin(new AlertPlugin());
    this.qingCore.installPlugin(new DialogPlugin());
    this.qingCore.installPlugin(new MenuPlugin());
    this.qingCore.installPlugin(new EditorAreaPlugin());
    this.qingCore.installPlugin(new SigninPlugin());

    this.activeInstalledPlugins();
  }

  ngOnDestroy() {}
}
