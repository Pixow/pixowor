import {
  Component,
  OnInit,
  NgZone,
  Inject,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  OnDestroy,
} from "@angular/core";
import * as path from "path";
import * as url from "url";
import compareVersions from "compare-version";
import { MessageChannel as msgc } from "electron-re";
import { Event, QingCore, Plugin, MsgcResponse, Severity, FileStat } from "qing-core";

import { PluginsManageService } from "./plugins-manage.service";
import { PLUGIN_CONF_FILE, PLUGIN_DIR, PLUGIN_SERVER } from "@workbench/app/app.config";
import { ipcRenderer } from "electron";
import { cloneDeep } from "lodash";

export type PluginLike = Partial<Plugin> & {
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

  constructor(
    private pluginsManageService: PluginsManageService,
    private zone: NgZone,
    @Inject(PLUGIN_SERVER) private pluginServer: string,
    @Inject(PLUGIN_CONF_FILE) private pluginConfFile: string,
    @Inject(PLUGIN_DIR) private pluginDir: string,
    private qingCore: QingCore,
    private readonly changeDetector: ChangeDetectorRef
  ) {
    console.log("PluginsManageComponent init");
  }

  ngOnInit() {
    this.pluginsManageService.populate();

    this.onlinePluginSub = this.pluginsManageService.onlinePlugins$.subscribe((data) => {
      this.onlinePlugins = data;
    });

    this.installedPluginSub = this.pluginsManageService.installedPlugins$.subscribe((data) => {
      this.developPlugins = cloneDeep(data.filter((item) => item.isDevelop));
      this.installedPlugins = cloneDeep(data.filter((item) => !item.isDevelop));
    });

    // 监听插件上传事件
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

  // 1. 拷贝到plugin文件夹
  // 2. 修改plugin.conf
  // 3. 更新installedPlugins
  private uploadPluginReply(event, rsp) {
    const { error, data } = rsp;
    if (error !== null) {
      this.qingCore.Toast(Severity.ERROR, "上传插件失败（上传失败）！");
    } else {
      const newPlugin = Object.assign(data.plugin, { isDevelop: false, installed: true });
      this.updatePluginConf(newPlugin).then(() => {
        console.log(
          "🚀 ~ file: plugins-manage.component.ts ~ line 85 ~ PluginsManageComponent ~ this.pluginsManageService.installedPlugins$.subscribe ~ this.developPlugins",
          this.developPlugins
        );
        console.log(
          "🚀 ~ file: plugins-manage.component.ts ~ line 85 ~ PluginsManageComponent ~ this.pluginsManageService.installedPlugins$.subscribe ~ this.developPlugins",
          this.developPlugins
        );
        this.qingCore.Toast(Severity.SUCCESS, "上传插件成功！");
      });
    }
  }

  // 1. 下载到plugin文件夹
  // 2. 修改plugin.conf
  // 3. 更新installedPlugins
  private downloadInstallPluginReply(event, rsp) {
    const { error, data } = rsp;
    if (error !== null) {
      this.qingCore.Toast(Severity.ERROR, "下载安装插件失败！");
    } else {
      const newPlugin = Object.assign(data.plugin, { installed: true, isDevelop: false });
      this.activePlugin(newPlugin);

      const onlinePlugins = this.pluginsManageService.onlinePlugins$.getValue();
      let needUpdatePlugin = onlinePlugins.find((item) => item.name === newPlugin.name);
      needUpdatePlugin.installed = true;
      this.pluginsManageService.onlinePlugins$.next(onlinePlugins);
    }
  }

  handleUploadPlugin() {
    this.qingCore.Emit(
      new Event("ShowInDialog", {
        componentName: "UploadPlugin",
        config: {
          header: "插件上传",
        },
      })
    );
  }

  handleTestPlugin() {
    this.qingCore.Emit(
      new Event("ShowInDialog", {
        componentName: "TestPlugin",
        config: {
          header: "测试插件",
        },
      })
    );
  }

  // 激活插件
  public activePlugin(plugin: PluginLike) {
    const { name } = plugin;
    const installedPlugins = this.pluginsManageService.installedPlugins$.getValue();

    (window as any).System.import(`${this.pluginServer}/${name}/index.js`)
      .then(async (module) => {
        const p: Plugin = new module.default(this.qingCore);
        await this.qingCore.PreparePlugins([p]);
        p.activate();
        // upgrade installed plugin if existed
        let needUpgradePlugin: PluginLike = installedPlugins.find((p) => p.name === plugin.name);
        if (needUpgradePlugin) {
          needUpgradePlugin = Object.assign(needUpgradePlugin, plugin);
          needUpgradePlugin.active = true;
        } else {
          plugin.active = true;
          installedPlugins.push(plugin);
        }
        this.zone.run(() => {
          this.pluginsManageService.installedPlugins$.next(installedPlugins);
        });
        this.qingCore
          .WriteJson(this.pluginConfFile, installedPlugins)
          .then((data) => {
            this.qingCore.Toast(Severity.SUCCESS, "激活插件成功！");
          })
          .catch((error) => {
            this.qingCore.Toast(Severity.ERROR, "激活插件失败！");
          });
      })
      .catch((error) => {
        // TODO: Print error message to toast
        console.log(
          "🚀 ~ file: plugins-manage.component.ts ~ line 173 ~ PluginsManageComponent ~ activePlugin ~ error",
          error
        );
        this.qingCore.Toast(Severity.ERROR, "激活插件失败！");
      });
  }

  // 禁用插件
  public deactivePlugin(plugin: PluginLike) {
    this.qingCore.DeactivatePlugin([plugin.name]);

    const installedPlugins = this.pluginsManageService.installedPlugins$.getValue();
    const thePlugin: PluginLike = installedPlugins.find((p) => p.name === plugin.name);
    thePlugin.active = false;
    this.pluginsManageService.installedPlugins$.next(installedPlugins);

    this.qingCore
      .WriteJson(this.pluginConfFile, installedPlugins)
      .then((data) => {
        this.qingCore.Toast(Severity.SUCCESS, "插件已被禁用！");
      })
      .catch((error) => {
        this.qingCore.Toast(Severity.SUCCESS, "禁用插件失败！");
      });
  }

  // 升级插件，下载插件并安装激活
  public installOrUpgradePlugin(plugin: PluginLike) {
    const { name, version } = plugin;
    const installedPlugins = this.pluginsManageService.installedPlugins$.getValue();
    if (installedPlugins.findIndex((p) => p.name === name && p.version === version) >= 0) {
      this.qingCore.Toast(Severity.SUCCESS, "插件已安装！");
      return;
    }
    const zipFileName = `${name}_${version}.zip`;

    const uri = new url.URL(zipFileName, this.qingCore.Environment.WEB_RESOURCE_URI);
    const output = path.join(this.qingCore.Environment.USER_DATA_PATH, zipFileName);

    msgc.send(QingCore.IoServiceName, "download-install-plugin", {
      plugin,
      uri: uri.toString(),
      output,
      dest: path.join(this.pluginDir, plugin.name),
    });
  }

  private updatePluginConf(newPlugin: PluginLike) {
    return new Promise((resolve, reject) => {
      this.qingCore.ReadJson(this.pluginConfFile).then((plugins: PluginLike[]) => {
        let index = plugins.findIndex((item) => item.name === newPlugin.name);
        if (index >= 0) {
          plugins[index] = Object.assign(plugins[index], newPlugin);
        } else {
          plugins = [...plugins, newPlugin];
        }

        this.qingCore.WriteJson(this.pluginConfFile, plugins).then(() => {
          const installedPlugins = this.pluginsManageService.installedPlugins$.getValue();
          let needUpdatePlugin = installedPlugins.find((item) => item.name === newPlugin.name);
          if (needUpdatePlugin) {
            needUpdatePlugin = Object.assign(needUpdatePlugin, newPlugin);
            this.pluginsManageService.installedPlugins$.next(installedPlugins);
          } else {
            this.pluginsManageService.installedPlugins$.next([...installedPlugins, newPlugin]);
          }

          resolve("done");
        });
      });
    });
  }

  // 上传到PluginServer进行本地开发调试
  public uploadPluginForDevelop(event) {
    const files = event.files;

    const pkgFile = event.files.find((file) => file.name === "package.json");

    this.zone.runOutsideAngular(() => {
      this.qingCore.ReadJson(pkgFile.path).then((data: PluginLike) => {
        const plugin: PluginLike = {
          name: data.name,
          version: data.version,
          author: data.author,
          description: data.description,
          isDevelop: true,
          installed: true,
        };
        const dest = path.join(this.pluginDir, plugin.name);
        const source = files.map((f) => ({ path: f.path, name: f.name }));

        this.qingCore.CopyFiles(source, dest).then((data) => {
          this.activePlugin(plugin);

          // 更新installedPlugins数据，更新ui视图
          // this.zone.run(() => {
          //   this.updatePluginConf(plugin);
          // });
        });
      });
    });
  }

  // 上传到服务器
  public async uploadPlugin(plugin: PluginLike) {
    const pluginRes = await this.qingCore.WebServiceSdk.plugin.getPlugin(plugin.name);
    const onLinePlugin = pluginRes.data.list[0];

    if (onLinePlugin) {
      if (compareVersions(onLinePlugin.version, plugin.version) >= 0) {
        this.qingCore.Toast(Severity.INFO, "插件版本已存在！");
        return;
      } else {
        await this.qingCore.WebServiceSdk.plugin.updatePlugin(plugin.name, {
          name: plugin.name,
          description: plugin.description,
          version: plugin.version,
          author: plugin.author,
        });
      }
    } else {
      await this.qingCore.WebServiceSdk.plugin.createPlugin({
        name: plugin.name,
        description: plugin.description,
        version: plugin.version,
        author: plugin.author,
      });
    }

    const folderName = plugin.name + "_" + plugin.version;

    this.qingCore.ListDir(`${this.pluginDir}/${plugin.name}`).then(async (files: FileStat[]) => {
      console.log("ListDir: ", files);
      // TODO: 思考是否把压缩上传封装为一个方法，有时候上传游戏需要处理很多文件，耗时很长，适合放在子进程中
      // msgc.send(QingCore.IoServiceName, "upload-plugin", {});

      const qiniuTokenRes = await this.qingCore.WebServiceSdk.util.getQiniuToken({
        name: `${folderName}.zip`,
      });

      const { token } = qiniuTokenRes.data;

      msgc.send(QingCore.IoServiceName, "upload-plugin", {
        files,
        folderName,
        token,
        plugin,
      });
    });
  }

  // 卸载插件
  // TODO: 卸载插件没有deactivate插件
  public uninstallPlugin(plugin: PluginLike) {
    const installedPlugins = this.pluginsManageService.installedPlugins$.getValue();
    const index = installedPlugins.findIndex((p) => p.name === plugin.name);
    installedPlugins.splice(index, 1);
    this.pluginsManageService.installedPlugins$.next(installedPlugins);

    const pluginFolder = path.join(this.pluginDir, plugin.name);
    this.qingCore.RemoveDir(pluginFolder).then(() => {
      this.qingCore
        .WriteJson(this.pluginConfFile, installedPlugins)
        .then(() => {
          this.qingCore.Toast(Severity.SUCCESS, "卸载插件成功!");
        })
        .catch((error) => {
          this.qingCore.Toast(Severity.SUCCESS, "卸载插件失败!");
        });
    });
  }
}
