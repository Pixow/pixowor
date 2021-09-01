import { AfterViewInit, Component, OnDestroy, OnInit, NgZone, Inject } from "@angular/core";
import { ContextService } from "./core/services";
import { DialogService } from "primeng/dynamicdialog";
import { QingCore, Severity, User } from "qing-core";
import { EreMessageChannel as msgc } from "electron-re";

import { AlertPlugin } from "@workbench/plugins/common/alert.plugin";
import { ToastPlugin } from "@workbench/plugins/common/toast.plugin";
import { DialogPlugin } from "@workbench/plugins/common/dialog.plugin";
import { MenubarPlugin } from "@workbench/plugins/common/menubar/menubar.plugin";
import { EditorAreaPlugin } from "@workbench/plugins/common/editor-area/editor-area.plugin";
import { StatusbarPlugin } from "@workbench/plugins/common/statusbar/statusbar.plugin";
import { SigninPlugin } from "@workbench/plugins/integration/signin/signin.plugin";
import { RendererPlugin } from "@workbench/plugins/common/renderer/renderer.plugin";
import { PluginsManagePlugin } from "@workbench/plugins/integration/plugins-manage/plugins-manage.plugin";
import { PLUGIN_CONF_FILE, PLUGIN_SERVER } from "./app.config";
import { Environment } from "@workbench/environments/environment";
import { PluginLike } from "@workbench/plugins/integration/plugins-manage/plugins-manage.component";

// regist module for plugin
import * as qingCore from "qing-core";
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
import * as gameCapsule from "game-capsule";
import * as ngxMonacoEditor from "@materia-ui/ngx-monaco-editor";
import { remote } from "electron";

export const COMMON_DEPS = {
  rxjs,
  "qing-core": qingCore,
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
  constructor(
    private dialogService: DialogService,
    public context: ContextService,
    private zone: NgZone,
    @Inject(PLUGIN_SERVER) private pluginServer: string,
    @Inject(PLUGIN_CONF_FILE) private pluginConf: string,
    private qingCore: QingCore
  ) {}

  ngOnInit() {
    this.qingCore.Environment = Object.assign(Environment, {
      APP_DATA_PATH: remote.app.getPath("appData"),
      USER_DATA_PATH: remote.app.getPath("userData"),
      TEMP_PATH: remote.app.getPath("temp"),
    });
    this.qingCore.InjectService(DialogService, this.dialogService);

    const user: User = this.qingCore.Get("user");

    if (user) {
      this.qingCore.InitToken(user.token);
    }
  }

  private activeInstalledPlugins() {
    this.zone.runOutsideAngular(() => {
      this.qingCore
        .ReadJson(this.pluginConf)
        .then((data) => {
          const plugins = data as PluginLike[];

          for (const plugin of plugins) {
            const pluginEntry = `${this.pluginServer}/${plugin.name}/index.js`;
            (window as any).System.import(pluginEntry).then((module) => {
              // 重新触发变更检测
              this.zone.run(() => {
                this.qingCore.InstallPlugin(new module.default(this.qingCore));
              });
            });
          }
        })
        .catch((error) => {
          this.qingCore.Toast(Severity.ERROR, error);
        });
    });
  }

  ngAfterViewInit() {
    const ctx = this.qingCore;
    // 每个插件的安装都是异步的
    this.qingCore.InstallPlugin(new RendererPlugin(ctx));
    this.qingCore.InstallPlugin(new ToastPlugin(ctx));
    this.qingCore.InstallPlugin(new AlertPlugin(ctx));
    this.qingCore.InstallPlugin(new DialogPlugin(ctx));
    this.qingCore.InstallPlugin(new MenubarPlugin(ctx));
    this.qingCore.InstallPlugin(new EditorAreaPlugin(ctx));
    this.qingCore.InstallPlugin(new SigninPlugin(ctx));
    this.qingCore.InstallPlugin(new StatusbarPlugin(ctx));
    this.qingCore.InstallPlugin(new PluginsManagePlugin(ctx));
    this.activeInstalledPlugins();
  }

  ngOnDestroy() {}
}
