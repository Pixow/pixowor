import { FunctionNames, IPlugin, PluginStore } from "angular-pluggable";
import { SigninModule } from "./signin.module";
import { SigninComponent } from "./signin.component";

export class SigninPlugin implements IPlugin {
  pluginStore: PluginStore;

  getPluginName(): string {
    return "sign@1.0.0";
  }

  getDependencies(): string[] {
    return ["dialog@1.0.0"];
  }

  init(pluginStore: PluginStore): void {
    this.pluginStore = pluginStore;
  }

  activate(): void {
    this.pluginStore.execFunction(
      FunctionNames.RENDERER_REGIST_DIALOG_COMPONENT,
      "Signin",
      SigninComponent
    );

    this.pluginStore.registObserver("user");
  }

  deactivate(): void {}
}
