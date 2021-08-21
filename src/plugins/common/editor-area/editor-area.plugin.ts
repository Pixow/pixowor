// import { FunctionNames, IPlugin, PluginStore } from "angular-pluggable";
import { QingCore, Plugin } from "qing-core";
import { Inject } from "typedi";

export class EditorAreaPlugin extends Plugin {
  // pluginStore: PluginStore;
  @Inject() qingCore: QingCore;
  title = "主内容";

  getPluginName(): string {
    return "editorArea@1.0.0";
  }

  getDependencies(): string[] {
    return [];
  }

  activate(): void {
    // this.pluginStore.execFunction(FunctionNames.RENDERER_ADD, "stage", StageComponent);
    // this.pluginStore.registObserver("stage", []);
    // this.pluginStore.addEventListener("ShowInStage", (event )=> {
    //   const component = this.pluginStore.execFunction(FunctionNames.RENDERER_GET_DIALOG_COMPONENT)
    // })
    this.qingCore.RegistVariable(this.getPluginName(), "EditorAreaComponents", []);
  }

  deactivate(): void {}
}
