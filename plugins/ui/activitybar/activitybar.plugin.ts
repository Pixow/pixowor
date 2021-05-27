import { FunctionNames, IPlugin, PluginStore } from "angular-pluggable";
import { ActivitybarModule } from "./activitybar.component";

export class ActivitybarPlugin implements IPlugin {
  pluginStore: PluginStore;

  getPluginName(): string {
    return "activitybar@1.0.0";
  }

  getDependencies(): string[] {
    return [];
  }

  init(pluginStore: PluginStore): void {
    this.pluginStore = pluginStore;
  }

  activate(): void {
    this.pluginStore.execFunction(FunctionNames.RENDERER_ADD, "activitybar", ActivitybarModule);

    this.pluginStore.registObserver("activitybar", []);
  }

  deactivate(): void {}
}
