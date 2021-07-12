import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  NgModule,
  Injector,
  OnInit,
  NgZone,
} from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { cloneDeep } from "lodash";
const shortid = require("shortid");
import { Event, IPlugin, PluginStore, usePluginStore } from "angular-pluggable";
import { ContextService } from "workbench/app/core/services/context.service";
import { Environment } from "workbench/environments/environment";

import { Plugin } from "../../types";
import { PluginsMarketService } from "../../plugins-market.service";
@Component({
  selector: "plugins-market",
  templateUrl: "./plugins-market.component.html",
  styleUrls: ["./plugins-market.component.scss"],
})
export class PluginsMarketComponent implements OnInit {
  private pluginStore: PluginStore = usePluginStore();
  private context: ContextService = this.pluginStore.getContext<ContextService>();
  plugins: Plugin[] = [];
  installedPlugins: Plugin[] = [];

  items = [
    {
      label: "上传插件",
      command: () => {
        this.handleUploadPlugin();
      },
    },
    {
      label: "测试插件",
      command: () => {
        this.handleTestPlugin();
      },
    },
  ];

  constructor(
    private cd: ChangeDetectorRef,
    private pluginsMarketService: PluginsMarketService,
    private zone: NgZone
  ) {}

  ngOnInit() {
    this.pluginsMarketService.plugins$.subscribe((data) => {
      this.plugins = data;
    });

    this.pluginsMarketService.installedPlugins$.subscribe((data) => {
      this.installedPlugins = data;
    });
  }

  public refreshPluginsList() {}

  // 显示插件详情
  public showPluginDetail(pluginName: string) {}

  // 激活插件
  public activePlugin(event) {
    const { plugin } = event;
    const { name } = plugin;
    const installedPlugins = cloneDeep(this.pluginsMarketService.installedPlugins$.getValue());

    (window as any).System.import(`${this.context.pluginServer}/${name}/index.js`).then(
      (module) => {
        console.log(">> active: ", new module.default());
        this.pluginStore.install(new module.default());

        // record install plugin into plugin-conf.json
        const idx = installedPlugins.findIndex((p) => p.name === plugin.name);
        if (idx >= 0) {
          installedPlugins[idx].version = plugin.version;
          installedPlugins[idx].active = true;
        } else {
          plugin.active = true;
          installedPlugins.push(plugin);
        }
        this.zone.run(() => {
          this.pluginsMarketService.installedPlugins$.next(installedPlugins);
        });
        this.context.writeJson(this.context.pluginConf, installedPlugins, () => {});
      }
    );
  }

  // 禁用插件
  public deactivePlugin(event) {
    const { plugin } = event;
    console.log(
      "🚀 ~ file: plugins-market.component.ts ~ line 97 ~ PluginsMarketComponent ~ deactivePlugin ~ plugin",
      plugin
    );

    this.pluginStore.uninstall(plugin.name);

    const installedPlugins = cloneDeep(this.pluginsMarketService.installedPlugins$.getValue());
    const idx = installedPlugins.findIndex((p) => p.name === plugin.name);
    installedPlugins[idx].active = false;
    this.pluginsMarketService.installedPlugins$.next(installedPlugins);
    this.context.writeJson(this.context.pluginConf, installedPlugins, () => {});
  }

  // 更新插件
  public updatePlugin(pluginName: string) {}

  public installPlugin(event) {
    const { plugin } = event;
    const { name, version } = plugin;
    const installedPlugins = this.pluginsMarketService.installedPlugins$.getValue();

    if (installedPlugins.findIndex((p) => p.name === name && p.version === version) >= 0) {
      return;
    }

    const zipFileName = `${name}_${version}.zip`;

    const uri = this.context.url.resolve(Environment.WEB_RESOURCE_URI, zipFileName);
    const output = this.context.path.join(this.context.userDataPath, zipFileName);

    // 下载
    this.context.downloadFile(uri, output, ({ error, data }) => {
      if (error) {
        console.error(error);
      }
      console.log("download file: ", data);
      // 安装
      const pluginInstallFolder = this.context.path.join(
        this.context.userDataPath,
        `plugins/${name}`
      );

      this.context.unzipFile(output, pluginInstallFolder, () => {
        this.activePlugin({ plugin });
      });
    });
  }

  public uninstallPlugin(event) {
    const { plugin } = event;

    console.log("userDataPath >>>", this.context.userDataPath);

    const pluginInstallFolder = this.context.path.join(
      this.context.userDataPath,
      `plugins/${plugin.name}`
    );

    this.context.removeDir(pluginInstallFolder, () => {
      this.deletePluginConfig({ plugin });
    });
  }

  public deletePluginConfig(event) {
    const { plugin } = event;

    this.pluginStore.uninstall(plugin.name);

    const installedPlugins = cloneDeep(this.pluginsMarketService.installedPlugins$.getValue());
    const idx = installedPlugins.findIndex((p) => p.name === plugin.name);
    installedPlugins.splice(idx, 1);
    console.log(">> installedPlugins: ", installedPlugins);
    this.zone.run(() => {
      this.pluginsMarketService.installedPlugins$.next(installedPlugins);
    });
    this.context.writeJson(this.context.pluginConf, installedPlugins, () => {});
  }

  handleUploadPlugin() {
    this.pluginStore.dispatchEvent(
      new Event("ShowInDialog", {
        componentName: "UploadPlugin",
        config: {
          header: "插件上传",
        },
      })
    );
  }

  handleTestPlugin() {
    this.pluginStore.dispatchEvent(
      new Event("ShowInDialog", {
        componentName: "TestPlugin",
        config: {
          header: "测试插件",
        },
      })
    );
  }
}
