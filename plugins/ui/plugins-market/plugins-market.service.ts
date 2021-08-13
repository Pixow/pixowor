import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { PluginStore, usePluginStore } from "angular-pluggable";
import { ContextService } from "workbench/app/core/services/context.service";
import { cloneDeep } from "lodash";
import { Plugin } from "./types";
@Injectable({
  providedIn: "root",
})
export class PluginsMarketService {
  private pluginStore: PluginStore = usePluginStore();
  public context: ContextService = this.pluginStore.getContext<ContextService>();

  plugins$ = new BehaviorSubject([]);
  installedPlugins$ = new BehaviorSubject([]);

  constructor() {
    this.listPlugins();
    this.listInstalledPlugins();
  }

  public listPlugins() {
    this.context.sdk.plugin.listPlugins().then((res) => {
      const { code, data } = res.data;
      this.plugins$.next(data.list);
    });
  }

  public listInstalledPlugins() {
    this.context.readFile(this.context.pluginConf, {}, (res) => {
      const plugins = JSON.parse(res.data);

      this.installedPlugins$.next(plugins);
    });
  }

  // 激活插件
  public activePlugin(plugin: Plugin, cb?: Function) {
    const { name } = plugin;
    const installedPlugins = cloneDeep(this.installedPlugins$.getValue());

    // TODO: import from userDataPath
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
        this.context.writeJson(this.context.pluginConf, installedPlugins, () => {
          if (cb) cb();
        });
      }
    );
  }
}
