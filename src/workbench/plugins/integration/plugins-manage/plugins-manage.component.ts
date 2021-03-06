import { Component, OnInit, NgZone, Inject, OnDestroy } from "@angular/core";
import * as path from "path";
import * as url from "url";
import compareVersions from "compare-version";
import { MessageChannel as msgc } from "electron-re";
import { PixoworCore, Plugin, Severity, FileStat, IO_SERVICE } from "pixowor-core";

import { PluginsManageService } from "./plugins-manage.service";
import { PLUGIN_CONF_FILE, PLUGIN_DIR, PLUGIN_SERVER } from "@workbench/app/app.config";
import { ipcRenderer } from "electron";
import { cloneDeep } from "lodash";
import { BehaviorSubject } from "rxjs";
import { distinctUntilChanged, filter, skip } from "rxjs/operators";

export type PluginLike = {
  pid: string;
  name: string;
  author: string;
  version: string;
  description: string;
  minAppVersion?: string;
  authorUrl?: string;
  dependencies?: { [k: string]: any };

  installed?: boolean;
  active?: boolean;
  isDevelop?: boolean;
  settings?: { [k: string]: any };
  updateAvailable?: boolean;
};

@Component({
  selector: "plugins-manage",
  templateUrl: "./plugins-manage.component.html",
  styleUrls: ["./plugins-manage.component.scss"],
})
export class PluginsManageComponent implements OnInit, OnDestroy {
  uploadedFiles: any[] = [];
  onlinePlugins: PluginLike[] = [];
  installedPlugins: PluginLike[] = [];
  developPlugins: PluginLike[] = [];

  private onlinePluginSub = null;
  private installedPluginSub = null;

  private updatePluginConf$ = new BehaviorSubject([]);

  constructor(
    private pluginsManageService: PluginsManageService,
    private zone: NgZone,
    @Inject(PLUGIN_SERVER) private pluginServer: string,
    @Inject(PLUGIN_CONF_FILE) private pluginConfFile: string,
    @Inject(PLUGIN_DIR) private pluginDir: string,
    @Inject(PixoworCore) private pixoworCore: PixoworCore
  ) { }

  ngOnInit() {
    this.pluginsManageService.populate();

    this.onlinePluginSub = this.pluginsManageService.onlinePlugins$.subscribe((data) => {
      this.onlinePlugins = data;
    });

    this.installedPluginSub = this.pluginsManageService.installedPlugins$
      .asObservable()
      .pipe(filter((data) => data.length > 0))
      .subscribe((data) => {
        console.log("subscribe from installedPlugins$: ", data);

        this.developPlugins = cloneDeep(data.filter((item) => item.isDevelop));
        this.installedPlugins = cloneDeep(data.filter((item) => !item.isDevelop));
      });

    this.updatePluginConf$
      .asObservable()
      .pipe(filter((data) => data.length > 0))
      .subscribe((data) => {
        this.pixoworCore.fileSystem
          .writeJson(this.pluginConfFile, data)
          .then((data) => {
            this.pixoworCore.workspace.toast(Severity.SUCCESS, "???????????????????????????");
          })
          .catch((error) => {
            this.pixoworCore.workspace.toast(Severity.ERROR, `???????????????????????????${error.message}`);
          });
      });

    // ????????????????????????
    // TODO: use electron-re ProcessHost
    ipcRenderer.on("upload-plugin_reply", this.uploadPluginReply.bind(this));

    ipcRenderer.on("download-install-plugin_reply", this.downloadInstallPluginReply.bind(this));
  }

  ngOnDestroy() {
    ipcRenderer.removeAllListeners("upload-plugin_reply");
    ipcRenderer.removeAllListeners("download-install-plugin_reply");

    this.onlinePluginSub.unsubscribe();
    this.installedPluginSub.unsubscribe();
  }

  // 1. ?????????plugin?????????
  // 2. ??????plugin.conf
  // 3. ??????installedPlugins
  private uploadPluginReply(event, rsp) {
    const { error, data } = rsp;
    if (error !== null) {
      this.pixoworCore.workspace.toast(Severity.ERROR, "???????????????????????????????????????");
    } else {
      const newPlugin = Object.assign(data.plugin, { isDevelop: false, installed: true });

      const installedPlugins = this.pluginsManageService.installedPlugins$.getValue();
      let needUpldatePlugin = installedPlugins.find((p) => p.pid === newPlugin.pid);
      needUpldatePlugin = Object.assign(needUpldatePlugin, newPlugin);

      this.pluginsManageService.installedPlugins$.next(installedPlugins);
      this.updatePluginConf$.next(installedPlugins);
    }
  }

  // 1. ?????????plugin?????????
  // 2. ??????plugin.conf
  // 3. ??????onlinePlugins
  private downloadInstallPluginReply(event, rsp) {
    const { error, data } = rsp;
    if (error !== null) {
      this.pixoworCore.workspace.toast(Severity.ERROR, "???????????????????????????");
    } else {
      const newPlugin = Object.assign(data.plugin, { installed: true, isDevelop: false });
      this.installPlugin(newPlugin);

      const onlinePlugins = this.pluginsManageService.onlinePlugins$.getValue();
      let needUpdatePlugin = onlinePlugins.find((item) => item.pid === newPlugin.pid);
      needUpdatePlugin.installed = true;

      this.pluginsManageService.onlinePlugins$.next(onlinePlugins);
    }
  }

  handleUploadPlugin() {
    this.pixoworCore.workspace.openDialog("UploadPlugin", { header: "????????????" });
  }

  handleTestPlugin() {
    this.pixoworCore.workspace.openDialog("TestPlugin", { header: "????????????" });
  }

  public installPlugin(plugin: PluginLike) {
    const { pid } = plugin;

    (window as any).System.import(`${this.pluginServer}/${pid}/index.js`)
      .then(async (module) => {
        const p: Plugin = new module.default(this.pixoworCore);
        await p.install();

        // ???????????????????????????????????????????????????
        const installedPlugins = this.pluginsManageService.installedPlugins$.getValue();
        let needUpldatePlugin = installedPlugins.find((p) => p.pid === plugin.pid);
        if (needUpldatePlugin) {
          needUpldatePlugin = Object.assign(needUpldatePlugin, plugin);
        } else {
          installedPlugins.push(plugin);
        }
        this.zone.run(() => {
          this.pluginsManageService.installedPlugins$.next(installedPlugins);
          this.updatePluginConf$.next(installedPlugins);
        });
      })
      .catch((error) => {
        // TODO: Print error message to toast
        this.pixoworCore.workspace.toast(Severity.ERROR, `?????????????????????${error.message}`);
      });
  }

  // ????????????
  public activePlugin(plugin: PluginLike) {
    const { pid } = plugin;
    const installedPlugins = this.pluginsManageService.installedPlugins$.getValue();

    (window as any).System.import(`${this.pluginServer}/${pid}/index.js`)
      .then(async (module) => {
        const p: Plugin = new module.default(this.pixoworCore);
        this.pixoworCore.activatePlugins([p]);
        // upgrade installed plugin if existed
        let needUpgradePlugin: PluginLike = installedPlugins.find((p) => p.pid === plugin.pid);
        needUpgradePlugin.active = true;

        this.zone.run(() => {
          this.pluginsManageService.installedPlugins$.next(installedPlugins);
          this.updatePluginConf$.next(installedPlugins);
        });
      })
      .catch((error) => {
        // TODO: Print error message to toast
        this.pixoworCore.workspace.toast(Severity.ERROR, "?????????????????????");
      });
  }

  // ????????????
  public deactivePlugin(plugin: PluginLike) {
    this.pixoworCore.deactivatePlugin(plugin.pid);

    const installedPlugins = this.pluginsManageService.installedPlugins$.getValue();
    const thePlugin: PluginLike = installedPlugins.find((p) => p.pid === plugin.pid);
    thePlugin.active = false;
    this.pluginsManageService.installedPlugins$.next(installedPlugins);
    this.updatePluginConf$.next(installedPlugins);
  }

  // ??????????????????????????????????????????
  public downloadPluginForInstall(plugin: PluginLike) {
    const { pid, version } = plugin;
    const installedPlugins = this.pluginsManageService.installedPlugins$.getValue();
    if (installedPlugins.findIndex((p) => p.pid === pid && p.version === version) >= 0) {
      this.pixoworCore.workspace.toast(Severity.SUCCESS, "??????????????????");
      return;
    }
    const zipFileName = `${pid}_${version}.zip`;

    const uri = new url.URL(zipFileName, this.pixoworCore.settings.WEB_RESOURCE_URI);
    const output = path.join(this.pixoworCore.settings.USER_DATA_PATH, zipFileName);

    msgc.send(IO_SERVICE, "download-install-plugin", {
      plugin,
      uri: uri.toString(),
      output,
      dest: path.join(this.pluginDir, plugin.pid),
    });
  }

  // TODO: ???????????????????????? avatar-manage-plugin ???assets?????????????????????????????????????????????
  // ?????????PluginServer????????????????????????
  public uploadPluginForDevelop(event) {
    const files = event.files;

    const manifestFile = event.files.find((file) => file.name === "manifest.json");

    this.zone.runOutsideAngular(() => {
      this.pixoworCore.fileSystem.readJson(manifestFile.path).then((manifest: any) => {
        const plugin: PluginLike = {
          ...manifest,
          isDevelop: true,
          installed: true,
        };
        const dest = path.join(this.pluginDir, plugin.pid);
        const source = files.map((f) => ({ path: f.path, name: f.name }));

        this.pixoworCore.fileSystem.copyFiles(source, dest).then((data) => {
          this.installPlugin(plugin);
        });
      });
    });
  }

  // ??????????????????
  public async uploadPlugin(plugin: PluginLike) {
    const onLinePlugin = await this.pixoworCore.pixowApi.plugin.getPlugin(plugin.pid);

    if (onLinePlugin) {
      if (compareVersions(onLinePlugin.version, plugin.version) >= 0) {
        this.pixoworCore.workspace.toast(Severity.INFO, "????????????????????????");
        return;
      } else {
        await this.pixoworCore.pixowApi.plugin.updatePlugin(plugin.pid, {
          name: plugin.name,
          description: plugin.description,
          version: plugin.version,
          author: plugin.author,
        });
      }
    } else {
      await this.pixoworCore.pixowApi.plugin.createPlugin({
        pid: plugin.pid,
        name: plugin.name,
        description: plugin.description,
        version: plugin.version,
        author: plugin.author,
      });
    }

    const folderName = plugin.pid + "_" + plugin.version;

    this.pixoworCore.fileSystem
      .listDir(`${this.pluginDir}/${plugin.pid}`)
      .then(async (files: FileStat[]) => {
        console.log("ListDir: ", files);
        // TODO: ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        // msgc.send(PixoworCore.IoServiceName, "upload-plugin", {});

        const qiniuTokenRes = await this.pixoworCore.pixowApi.util.getQiniuToken({
          name: `${folderName}.zip`,
        });

        const { token } = qiniuTokenRes.data;

        msgc.send(IO_SERVICE, "upload-plugin", {
          files,
          folderName,
          token,
          plugin,
        });
      });
  }

  // ????????????
  // TODO: ??????????????????deactivate??????
  public async uninstallPlugin(plugin: PluginLike) {
    const installedPlugins = this.pluginsManageService.installedPlugins$.getValue();
    const index = installedPlugins.findIndex((p) => p.pid === plugin.pid);
    installedPlugins.splice(index, 1);
    this.pluginsManageService.installedPlugins$.next(installedPlugins);
    this.updatePluginConf$.next(installedPlugins);

    const pluginFolder = path.join(this.pluginDir, plugin.pid);
    await this.pixoworCore.fileSystem.removeDir(pluginFolder);
  }
}
