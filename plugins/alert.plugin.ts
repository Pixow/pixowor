import { IPlugin, PluginStore } from "angular-pluggable";

export class AlertPlugin implements IPlugin {
  pluginStore: PluginStore;

  getPluginName(): string {
    return "alert@1.0.0";
  }

  getDependencies(): string[] {
    return [];
  }

  init(pluginStore: PluginStore): void {
    this.pluginStore = pluginStore;
  }

  activate(): void {
    this.pluginStore.addEventListener("Alert", (event) => {
      alert("Alert Test");
    });
  }

  deactivate(): void {}
}
