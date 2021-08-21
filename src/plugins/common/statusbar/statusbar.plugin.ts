import { Event, FunctionNames, IPlugin, PluginStore } from "angular-pluggable";
import { StatusbarComponent } from "./statusbar";

export class StatusbarPlugin implements IPlugin {
  pluginStore: PluginStore;
  title = "状态栏";
  id = "statusbar";

  getPluginName(): string {
    return "statusbar@1.0.0";
  }

  getDependencies(): string[] {
    return [];
  }

  init(pluginStore: PluginStore): void {
    this.pluginStore = pluginStore;
    console.log("StatusbarPlugin init----->");
    this.pluginStore.registObserver("status", {});
  }

  activate(): void {
    this.pluginStore.execFunction(FunctionNames.RENDERER_ADD, "statusbar", StatusbarComponent);
    this.pluginStore.addEventListener("AddStatus", (event: Event) => {
      const { pluginName, message } = event.data;
      let status = this.pluginStore.getObserver("status").getValue();
      status[pluginName] = message;
      this.pluginStore.getObserver("status").next(status);
    });
  }

  deactivate(): void {}
}
