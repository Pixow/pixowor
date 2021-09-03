import {
  QingCore,
  Plugin,
  Event,
  RendererFunctions,
  RendererEvents,
  UIEvents,
  Severity,
} from "qing-core";
import { RenderderEvent } from "../renderer/renderer";
import { MenubarComponent } from "./menubar.component";
import en from "./i18n/en.json";
import zhCN from "./i18n/zh-CN.json";
export class MenubarPlugin extends Plugin {
  name = "Menubar";
  version = "1.0.0";
  description = "菜单栏";

  constructor(private qingCore: QingCore) {
    super();
  }

  getDependencies(): string[] {
    return ["Toast@1.0.0"];
  }

  async prepare(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.qingCore
        .InstallI18n({
          en: en,
          "zh-CN": zhCN,
        })
        .then(() => {
          console.log("Menubar plugin prepare");
          resolve(true);
        })
        .catch((error) => reject(error));
    });
  }

  activate(): void {
    this.qingCore.Invoke(
      RendererFunctions.REGIST_PLACEMENT_COMPONENTS,
      "menubar-slot",
      MenubarComponent
    );
    this.qingCore.Emit(new RenderderEvent(RendererEvents.UPDATE_SLOT_VIEW, "menubar-slot"));
  }

  deactivate(): void {}
}
