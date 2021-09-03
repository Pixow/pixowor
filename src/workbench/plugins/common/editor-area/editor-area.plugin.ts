import { QingCore, Plugin, RendererFunctions, RendererEvents } from "qing-core";
import { RenderderEvent } from "../renderer/renderer";
import { EditorAreaComponent } from "./editor-area.component";

export class EditorAreaPlugin extends Plugin {
  name = "EditorArea";
  version = "1.0.0";
  description = "编辑区域插件";

  constructor(private qingCore: QingCore) {
    super();
  }

  getDependencies(): string[] {
    return [];
  }

  activate(): void {
    this.qingCore.Invoke(
      RendererFunctions.REGIST_PLACEMENT_COMPONENTS,
      "editor-area-slot",
      EditorAreaComponent
    );
    this.qingCore.RegistVariable(this.getPluginIdentify(), "EditorAreaComponents", []);
    this.qingCore.Emit(new RenderderEvent(RendererEvents.UPDATE_SLOT_VIEW, "editor-area-slot"));
  }

  deactivate(): void {}
}
