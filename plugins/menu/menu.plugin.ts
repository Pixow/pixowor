import { IPlugin, PluginStore } from "angular-pluggable";
import { MenuModule } from "./menu.module";

export class MenuPlugin implements IPlugin {
  pluginStore: PluginStore;

  getPluginName(): string {
    return "helloworld@1.0.0";
  }

  getDependencies(): string[] {
    return [];
  }

  init(pluginStore: PluginStore): void {
    this.pluginStore = pluginStore;
  }

  activate(): void {
    this.pluginStore.execFunction("Renderer.add", "menu", MenuModule);
  }

  deactivate(): void {}
}
