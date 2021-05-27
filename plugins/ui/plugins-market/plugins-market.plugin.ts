import { FunctionNames, IPlugin, PluginStore } from "angular-pluggable";
import { PluginsMarketModule } from "plugins/ui/plugins-market/plugins-market.component";
import { ActivitybarItem } from "workbench/app/models/activity";

export class PluginsMarketPlugin implements IPlugin {
  pluginStore: PluginStore;

  getPluginName(): string {
    return "plugins-market@1.0.0";
  }

  getDependencies(): string[] {
    return [];
  }

  init(pluginStore: PluginStore): void {
    this.pluginStore = pluginStore;
  }

  activate(): void {
    const items = this.pluginStore.getObserver("activitybar").getValue() as Array<ActivitybarItem>;
    this.pluginStore.getObserver("activitybar").next(
      items.concat({
        title: "插件市场",
        icon: "qing qing-plug",
        index: 2,
        command: () => {
          this.pluginStore.execFunction(
            FunctionNames.RENDERER_ONCE,
            "explorer",
            PluginsMarketModule
          );
        },
      })
    );

    this.pluginStore;
  }

  deactivate(): void {}
}
