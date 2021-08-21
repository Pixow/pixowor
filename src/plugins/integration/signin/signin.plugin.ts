import { FunctionNames, IPlugin, PluginStore } from "angular-pluggable";
import { SigninComponent } from "./signin.component";
import { LocalStorage } from "@workbench/app/utils/localstorage";
export class SigninPlugin implements IPlugin {
  pluginStore: PluginStore;
  title = "登录工具";
  id = "signin";

  getPluginName(): string {
    return "signin-plugin@1.0.0";
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

    const user = LocalStorage.get("user");
    this.pluginStore.registObserver("user", user);
  }

  deactivate(): void {}
}
