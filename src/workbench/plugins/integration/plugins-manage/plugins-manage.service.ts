import { Injectable, Inject } from "@angular/core";
import { Plugin, PixoworCore } from "pixowor-core";
import { BehaviorSubject, combineLatest, forkJoin, from, merge, Observable } from "rxjs";
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
    private pixoworCore: PixoworCore,
    @Inject(PLUGIN_CONF_FILE) private pluginConfFile: string
  ) {}

  public populate() {
    forkJoin({
      installedPlugins: this.listInstalledPlugins(),
      onlinePlugins: this.listOnlinePlugins(),
    }).subscribe((res) => {
      console.log("forkJoin:", res);
      const installedPlugins = <PluginLike[]>res.installedPlugins;
      const onlinePlugins = <PluginLike[]>res.onlinePlugins.list;

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
    return from(this.pixoworCore.pixowApi.plugin.listPlugins());
  }

  public listInstalledPlugins() {
    return from(this.pixoworCore.fileSystemManager.readJson(this.pluginConfFile));
  }
}
