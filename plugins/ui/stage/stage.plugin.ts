
import { FunctionNames, IPlugin, PluginStore } from "angular-pluggable";
import { StageComponent } from "./stage.component";

export class StagePlugin implements IPlugin {
  pluginStore: PluginStore;
  title = "主内容";
  id = "stage";

  getPluginName(): string {
    return "stage@1.0.0";
  }

  getDependencies(): string[] {
    return [];
  }

  init(pluginStore: PluginStore): void {
    this.pluginStore = pluginStore;
  }

  activate(): void {
    this.pluginStore.execFunction(FunctionNames.RENDERER_ADD, "stage", StageComponent);

    this.pluginStore.registObserver("stage", []);

    this.pluginStore.addEventListener("ShowInStage", (event )=> {
      const component = this.pluginStore.execFunction(FunctionNames.RENDERER_GET_DIALOG_COMPONENT)

     
    })
  }

  deactivate(): void {}
}
