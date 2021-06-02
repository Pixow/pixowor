import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  NgModule,
  OnInit,
} from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { cloneDeep } from "lodash";

import { Event, IPlugin, PluginStore, usePluginStore } from "angular-pluggable";
import { ContextService } from "workbench/app/core/services/context.service";
import { Environment } from "workbench/environments/environment";

import { Plugin } from "../../types";
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

  plugins$ = new BehaviorSubject([]);
  installedPlugins$ = new BehaviorSubject([]);

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

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.listPlugins();
    this.listInstalledPlugins();

    // this.plugins$.subscribe((data) => {
    //   this.plugins = data;
    // });

    // this.installedPlugins$.subscribe((data) => {
    //   this.installedPlugins = data;
    // });
  }

  public onTabOpen(e) {
    const index = e.index;

    if (index === 0) {
      this.listPlugins();
    }
  }

  public listPlugins() {
    this.context.sdk.plugin.listPlugins().then((res) => {
      const { code, data } = res.data;
      this.plugins$.next(data.list);
      console.log(">> list plugins: ", data);
    });
  }

  public listInstalledPlugins() {
    this.context.readFile(this.context.pluginConf, (res) => {
      const plugins = JSON.parse(res.data);

      this.installedPlugins$.next(plugins);
    });
  }

  // 显示插件详情
  public showPluginDetail(pluginName: string) {}

  // 激活插件
  public activePlugin(event) {
    const { plugin } = event;
    const { name } = plugin;
    const installedPlugins = cloneDeep(this.installedPlugins$.getValue());

    (window as any).System.import(`http://localhost:45326/plugins/${name}/index.js`).then(
      (module) => {
        console.log(">> active: ", new module.default());
        this.pluginStore.install(new module.default());

        // record install plugin into plugin-conf.json
        const idx = installedPlugins.findIndex((p) => p.name === plugin.name);
        if (idx >= 0) {
          installedPlugins[idx].active = true;
        } else {
          plugin.active = true;
          installedPlugins.push(plugin);
        }
        this.installedPlugins$.next(installedPlugins);
        this.context.writeJson(this.context.pluginConf, installedPlugins, () => {});
      }
    );
  }

  // 禁用插件
  public deactivePlugin(event) {
    const { plugin } = event;

    this.pluginStore.uninstall(plugin.name);

    const installedPlugins = cloneDeep(this.installedPlugins$.getValue());
    const idx = installedPlugins.findIndex((p) => p.name === plugin.name);
    installedPlugins[idx].active = false;
    this.installedPlugins$.next(installedPlugins);
    this.context.writeJson(this.context.pluginConf, installedPlugins, () => {});
  }

  // 卸载插件
  public uninstallPlugin(pluginName: string) {}

  // 更新插件
  public updatePlugin(pluginName: string) {}

  public installPlugin(event) {
    const { plugin } = event;
    const { name, version } = plugin;
    const installedPlugins = this.installedPlugins$.getValue();

    if (installedPlugins.findIndex((p) => p.name === name && p.version === version) >= 0) {
      return;
    }

    const zipFileName = `${name}_${version}.zip`;

    const uri = this.context.url.resolve(Environment.WEB_RESOURCE_URI, zipFileName);
    const output = this.context.path.join(this.context.tempPath, zipFileName);

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
        if (installedPlugins.findIndex((p) => p.name === plugin.name) < 0) {
          this.activePlugin({ plugin });
        }
      });
    });
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
