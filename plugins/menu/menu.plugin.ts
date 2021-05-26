import { FunctionNames, IPlugin, PluginStore } from "angular-pluggable";
import { MenuModule } from "./menu.module";

export class MenuPlugin implements IPlugin {
  pluginStore: PluginStore;

  getPluginName(): string {
    return "helloworld@1.0.0";
  }

  getDependencies(): string[] {
    return ["toast@1.0.0"];
  }

  init(pluginStore: PluginStore): void {
    this.pluginStore = pluginStore;
  }

  activate(): void {
    this.pluginStore.execFunction(FunctionNames.RENDERER_ADD, "menu", MenuModule);
  }

  deactivate(): void {}
}
