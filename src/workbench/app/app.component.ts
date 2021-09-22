import { AfterViewInit, Component, OnDestroy, OnInit, NgZone, Inject } from "@angular/core";
import { TranslocoService } from "@ngneat/transloco";
import { ContextService } from "./core/services";
import { DialogService } from "primeng/dynamicdialog";
import { PixoworCore, Severity, Plugin } from "pixowor-core";
import { User } from "pixow-api";
import { remote } from "electron";
import storage from "electron-json-storage";
import * as path from "path";
import compareVersions from "compare-version";

import { AlertPlugin } from "@workbench/plugins/common/alert/alert.plugin";
import { ToastPlugin } from "@workbench/plugins/common/toast/toast.plugin";
import { DialogPlugin } from "@workbench/plugins/common/dialog/dialog.plugin";
import { MenubarPlugin } from "@workbench/plugins/common/menubar/menubar.plugin";
import { EditorAreaPlugin } from "@workbench/plugins/common/editor-area/editor-area.plugin";
import { StatusbarPlugin } from "@workbench/plugins/common/statusbar/statusbar.plugin";
import { SigninPlugin } from "@workbench/plugins/integration/signin/signin.plugin";
import { RendererPlugin } from "@workbench/plugins/common/renderer/renderer.plugin";
import { PluginsManagePlugin } from "@workbench/plugins/integration/plugins-manage/plugins-manage.plugin";
import { PLUGIN_CONF_FILE, PLUGIN_SERVER } from "./app.config";
import { PluginLike } from "@workbench/plugins/integration/plugins-manage/plugins-manage.component";

// regist module for plugin
import * as pixoworCore from "pixowor-core";
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
  "pixowor-core": pixoworCore,
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
    @Inject(PixoworCore) private pixoworCore: PixoworCore
  ) {}

  ngOnInit() {
    this.initialize();
    this.initPixoworCore();
  }

  initialize() {
    storage.setDataPath(path.join(remote.app.getPath("userData"), "runtime"));
  }

  initPixoworCore() {
    this.pixoworCore.serviceManager.injectService(DialogService, this.dialogService);
    this.pixoworCore.serviceManager.injectService(TranslocoService, this.translocoService);

    const user: User = this.pixoworCore.storageManager.get("user");

    if (user) {
      this.pixoworCore.setPixowApiToken(user.token);
    }
  }

  async ngAfterViewInit() {
    const settings = storage.getSync("settings");

    const lang = (settings as any).lang || "zh-CN";

    // Check core plugin version and install
    const installedCorePlugins = this.getInstalledCorePlugins();
    const corePlugins = this.getCorePlugins();

    for (const corePlugin of corePlugins) {
      const installedPlugin: PluginLike = installedCorePlugins[corePlugin.pid];

      if (!installedPlugin || compareVersions(installedPlugin.version, corePlugin.version) < 0) {
        await corePlugin.install();

        storage.set(
          "core-plugins",
          Object.assign(installedCorePlugins, { [corePlugin.pid]: corePlugin.version }),
          () => {}
        );
      }
    }

    // 必须等待语言load完成，才能激活插件
    this.translocoService.load(lang).subscribe(() => {
      this.translocoService.setDefaultLang(lang);
      this.translocoService.setActiveLang(lang);

      this.activatePlugins();
    });
  }

  private getCorePlugins(): Plugin[] {
    const ctx = this.pixoworCore;
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

  activatePlugins() {
    this.pixoworCore.activatePlugins(this.getCorePlugins());
    this.activeCommunityPlugins();
  }

  private getInstalledCorePlugins() {
    return storage.getSync("core-plugins");
  }

  private activeCommunityPlugins() {
    this.zone.runOutsideAngular(() => {
      this.pixoworCore.fileSystemManager
        .readJson(this.pluginConf)
        .then((data) => {
          const plugins = data as PluginLike[];

          for (const plugin of plugins) {
            const pluginEntry = `${this.pluginServer}/${plugin.pid}/index.js`;
            (window as any).System.import(pluginEntry).then((module) => {
              // 重新触发变更检测
              this.zone.run(() => {
                // TODO: wait for activate
                const plugin: Plugin = new module.default(this.pixoworCore);

                this.pixoworCore.activatePlugins([plugin]);
              });
            });
          }
        })
        .catch((error) => {
          this.pixoworCore.workspace.toast(Severity.ERROR, error);
        });
    });
  }

  ngOnDestroy() {}
}
