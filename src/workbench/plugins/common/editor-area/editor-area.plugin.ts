import { QingCore, Plugin, RendererFunctions, RendererEvents } from "qing-core";
import { RenderderEvent } from "../renderer/renderer";
import { EditorAreaComponent } from "./editor-area.component";

export class EditorAreaPlugin extends Plugin {
  name = "EditorArea";
  version = "1.0.0";
  description = "编辑区域插件";

  constructor(private qingCore: QingCore) {
    super();
    this.qingCore.Invoke(
      RendererFunctions.REGIST_PLACEMENT_COMPONENTS,
      "editor-area-slot",
      EditorAreaComponent
    );
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
    this.qingCore.RegistVariable(this.getPluginIdentify(), "EditorAreaComponents", []);
    this.qingCore.Emit(new RenderderEvent(RendererEvents.UPDATE_SLOT_VIEW, "editor-area-slot"));
  }

  deactivate(): void {}
}
