import { AfterViewInit, Component, OnDestroy, OnInit, NgZone, Inject } from "@angular/core";
import { TranslocoService } from "@ngneat/transloco";
import { ContextService } from "./core/services";
import { DialogService } from "primeng/dynamicdialog";
import { PixoworCore, Severity, Plugin } from "pixowor-core";
import { User } from "pixowor-core";
import { remote } from "electron";
import storage from "electron-json-storage";
import compareVersions from "compare-version";

import { AlertPlugin } from "@workbench/plugins/common/alert/alert.plugin";
import { ToastPlugin } from "@workbench/plugins/common/toast/toast.plugin";
import { DialogPlugin } from "@workbench/plugins/common/dialog/dialog.plugin";
import { MenubarPlugin } from "@workbench/plugins/common/menubar/menubar.plugin";
import { EditorAreaPlugin } from "@workbench/plugins/common/editor-area/editor-area.plugin";
import { SidebarPlugin } from "@workbench/plugins/common/sidebar/sidebar.plugin";
import { StatusbarPlugin } from "@workbench/plugins/common/statusbar/statusbar.plugin";
import { SigninPlugin } from "@workbench/plugins/integration/signin/signin.plugin";
import { RendererPlugin } from "@workbench/plugins/common/renderer/renderer.plugin";
import { PluginsManagePlugin } from "@workbench/plugins/integration/plugins-manage/plugins-manage.plugin";
import { PLUGIN_CONF_FILE, PLUGIN_SERVER } from "./app.config";
import { PluginLike } from "@workbench/plugins/integration/plugins-manage/plugins-manage.component";
import { WidgetbarPlugin } from "@workbench/plugins/common/widgetbar/widgetbar.plugin";

// regist module for plugin
import * as path from "path";
import * as fs from "fs";
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
import * as dynamicdialog from "primeng/dynamicdialog";
import * as gameCapsule from "game-capsule";
import * as Transloco from "@ngneat/transloco";
import * as gameCore from "@PixelPai/game-core";
import * as ngxTippyWrapper from "ngx-tippy-wrapper";

export const COMMON_DEPS = {
  rxjs,
  path: path,
  fs: fs,
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
  "primeng/dynamicdialog": dynamicdialog,
  "game-capsule": gameCapsule,
  "@ngneat/transloco": Transloco,
  "@PixelPai/game-core": gameCore,
  "ngx-tippy-wrapper": ngxTippyWrapper
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
  ) { }

  ngOnInit() {
    this.initialize();
    this.initPixoworCore();
  }

  initialize() {
    storage.setDataPath(path.join(remote.app.getPath("userData"), "runtime"));
  }

  initPixoworCore() {
    this.pixoworCore.service.injectService(DialogService, this.dialogService);
    this.pixoworCore.service.injectService(TranslocoService, this.translocoService);

    this.pixoworCore.state.registerVariable("GameCapsule");
    this.pixoworCore.state.registerVariable("SceneCapsule");
    this.pixoworCore.state.registerVariable("SelectedGameObject");

    const user: User = this.pixoworCore.storage.get("user");

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
          () => { }
        );
      }
    }
    // 必须等待语言load完成，才能激活插件，否则插件的i18功能不能正常加载多语言文件
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
      new SidebarPlugin(ctx),
      new WidgetbarPlugin(ctx),
      new SigninPlugin(ctx),
      new StatusbarPlugin(ctx),
      new PluginsManagePlugin(ctx),
    ];
  }

  activatePlugins() {
    this.activeCorePlugins();
    this.activeCommunityPlugins();
  }

  private activeCorePlugins() {
    const corePlugins = this.getCorePlugins();
    this.pixoworCore.activatePlugins(corePlugins);
  }

  private getInstalledCorePlugins() {
    return storage.getSync("core-plugins");
  }

  private activeCommunityPlugins() {
    this.zone.runOutsideAngular(() => {
      this.pixoworCore.fileSystem
        .readJson(this.pluginConf)
        .then((data) => {
          const plugins = (data as PluginLike[]).filter((plugin) => plugin.active);

          for (const plugin of plugins) {
            const pluginEntry = `${this.pluginServer}/${plugin.pid}/index.js`;
            (window as any).System.import(pluginEntry).then((module) => {
              // 重新触发变更检测
              this.zone.run(async () => {
                // TODO: wait for activate
                const plugin: Plugin = new module.default(this.pixoworCore);
                await plugin.install();
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

  ngOnDestroy() { }
}
