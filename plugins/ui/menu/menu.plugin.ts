import { FunctionNames, IPlugin, PluginStore } from "angular-pluggable";
import { MenuComponent } from "./menu.component";

export class MenuPlugin implements IPlugin {
  pluginStore: PluginStore;
  title = "菜单";
  id = "menu";

  getPluginName(): string {
    return "menu@1.0.0";
  }

  getDependencies(): string[] {
    return ["toast@1.0.0"];
  }

  init(pluginStore: PluginStore): void {
    this.pluginStore = pluginStore;
  }

  activate(): void {
    this.pluginStore.execFunction(FunctionNames.RENDERER_ADD, "menu", MenuComponent);
  }

  deactivate(): void {}
}
