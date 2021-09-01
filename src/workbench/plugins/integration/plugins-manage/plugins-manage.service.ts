import { Injectable, Inject } from "@angular/core";
import { Plugin, QingCore } from "qing-core";
import { BehaviorSubject, combineLatest, forkJoin, from, merge } from "rxjs";
import { map } from "rxjs/operators";
import { PLUGIN_CONF_FILE, PLUGIN_SERVER } from "@workbench/app/app.config";
import { PluginLike } from "./plugins-manage.component";
import compareVersions from "compare-version";

@Injectable({
  providedIn: "root",
})
export class PluginsManageService {
  onlinePlugins$ = new BehaviorSubject([]);
  installedPlugins$ = new BehaviorSubject([]);

  constructor(
    private qingCore: QingCore,
    @Inject(PLUGIN_CONF_FILE) private pluginConfFile: string
  ) {}

  public populate() {
    forkJoin({
      installedPlugins: this.listInstalledPlugins(),
      onlinePlugins: this.listOnlinePlugins(),
    }).subscribe((res) => {
      console.log("forkJoin:", res);
      const installedPlugins = <PluginLike[]>res.installedPlugins;
      const onlinePlugins = <PluginLike[]>(
        res.onlinePlugins.list.map((p) => ({
          name: p.name,
          description: p.description,
          version: p.version,
          author: p.author,
        }))
      );

      for (let onlinePlugin of onlinePlugins) {
        if (
          installedPlugins.findIndex(
            (installedPlugin) => installedPlugin.name === onlinePlugin.name
          ) >= 0
        ) {
          onlinePlugin.installed = true;
        }
      }

      for (let installedPlugin of installedPlugins) {
        const samePlugin = onlinePlugins.find(
          (onlinePlugin) => onlinePlugin.name === installedPlugin.name
        );

        if (samePlugin && compareVersions(samePlugin.version, installedPlugin.version) > 0) {
          installedPlugin.updateAvailable = true;
        }
      }

      this.installedPlugins$.next(installedPlugins);
      this.onlinePlugins$.next(onlinePlugins);
    });
  }

  public listOnlinePlugins() {
    return from(this.qingCore.WebServiceSdk.plugin.listPlugins()).pipe(map((res) => res.data));
  }

  public listInstalledPlugins() {
    return from(this.qingCore.ReadJson(this.pluginConfFile));
  }
}
