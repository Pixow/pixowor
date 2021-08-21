import { FunctionNames, IPlugin, PluginStore } from "angular-pluggable";
import { PluginsMarketComponent } from "./components/plugins-market/plugins-market.component";

import { ActivitybarItem } from "@workbench/app/models/activity";
import { UploadPluginComponent } from "./components/upload-plugin/upload-plugin.component";
import { ContextService } from "@workbench/app/core/services/context.service";
import { TestPluginComponent } from "./components/test-plugin/test-plugin.component";

export class PluginsMarketPlugin implements IPlugin {
  pluginStore: PluginStore;
  title = "插件集市";
  id = "plugins-market";

  constructor(private context: ContextService) {}

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
    items.push({
      title: "插件市场",
      icon: "qing qing-plug",
      id: this.id,
      command: () => {
        this.pluginStore.execFunction(
          FunctionNames.RENDERER_ONCE,
          "explorer",
          PluginsMarketComponent
        );
      },
    });
    this.pluginStore.getObserver("activitybar").next(items);

    this.pluginStore.execFunction(
      FunctionNames.RENDERER_REGIST_DIALOG_COMPONENT,
      "UploadPlugin",
      UploadPluginComponent
    );

    this.pluginStore.execFunction(
      FunctionNames.RENDERER_REGIST_DIALOG_COMPONENT,
      "TestPlugin",
      TestPluginComponent
    );
  }

  deactivate(): void {}
}
