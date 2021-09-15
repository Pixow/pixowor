import { AfterViewInit, Component, OnDestroy, OnInit, NgZone, Inject } from "@angular/core";
import { TranslocoService } from "@ngneat/transloco";
import { ContextService } from "./core/services";
import { DialogService } from "primeng/dynamicdialog";
import { QingCore, Severity, User, Plugin } from "qing-core";
import { remote } from "electron";

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
import * as Transloco from "@ngneat/transloco";
import gameCore from "@PixelPai/game-core";
import { EditorCanvasManager } from "@PixelPai/game-core/editor";

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
  "@ngneat/transloco": Transloco,
  "@PixelPai/game-core": gameCore,
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
    private translocoService: TranslocoService,
    private qingCore: QingCore
  ) {}

  ngOnInit() {
    this.qingCore.Environment = Object.assign(Environment, {
      APP_PATH: remote.app.getAppPath(),
      APP_DATA_PATH: remote.app.getPath("appData"),
      USER_DATA_PATH: remote.app.getPath("userData"),
      TEMP_PATH: remote.app.getPath("temp"),
    });

    console.log("QingCore Environment: ", this.qingCore.Environment);

    this.qingCore.InjectService(DialogService, this.dialogService);
    this.qingCore.InjectService(TranslocoService, this.translocoService);

    const user: User = this.qingCore.Get("user");

    if (user) {
      this.qingCore.InitToken(user.token);
    }
  }

  ngAfterViewInit() {
    // 每个插件的prepare都是异步的
    this.preparePlugins().then(() => {
      this.qingCore.GetDefaultLang().then(({ lang }) => {
        // 必须等待语言load完成，才能激活插件
        this.translocoService.load(lang).subscribe(() => {
          this.translocoService.setDefaultLang(lang);
          this.translocoService.setActiveLang(lang);

          this.activatePlugins();
        });
      });
    });
  }

  private getInitialPlugins(): Plugin[] {
    const ctx = this.qingCore;
    return [
      new RendererPlugin(ctx),
      new ToastPlugin(ctx),
      new AlertPlugin(ctx),
      new DialogPlugin(ctx),
      new MenubarPlugin(ctx),
      new EditorAreaPlugin(ctx),
      new SigninPlugin(ctx),
      new StatusbarPlugin(ctx),
      new PluginsManagePlugin(ctx),
    ];
  }

  preparePlugins() {
    // Prepare Plugin first, include install I18n files into userData i18n directory
    return this.qingCore.PreparePlugins(this.getInitialPlugins());
  }

  activatePlugins() {
    this.qingCore.ActivatePlugins(this.getInitialPlugins());
    this.activeInstalledPlugins();
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
                // TODO: wait for activate
                const plugin: Plugin = new module.default(this.qingCore);
                this.qingCore.PreparePlugins([plugin]).then(() => {
                  plugin.activate();
                });
              });
            });
          }
        })
        .catch((error) => {
          this.qingCore.Toast(Severity.ERROR, error);
        });
    });
  }

  ngOnDestroy() {}
}
