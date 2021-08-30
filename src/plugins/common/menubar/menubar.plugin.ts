import { QingCore, Plugin, Event, RendererFunctions, RendererEvents, UIEvents } from "qing-core";
import { RenderderEvent } from "../renderer/renderer";
import { MenubarComponent } from "./menubar.component";

export class MenubarPlugin extends Plugin {
  name = "Menubar";
  version = "1.0.0";
  description = "菜单栏";

  constructor(private qingCore: QingCore) {
    super();
    this.qingCore.Invoke(
      RendererFunctions.REGIST_PLACEMENT_COMPONENTS,
      "menubar-slot",
      MenubarComponent
    );
  }

  getDependencies(): string[] {
    return ["Toast@1.0.0"];
  }

  activate(): void {
    this.qingCore.Emit(new RenderderEvent(RendererEvents.UPDATE_SLOT_VIEW, "menubar-slot"));
  }

  deactivate(): void {}
}
