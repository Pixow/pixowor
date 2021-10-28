import { PixoworCore, Plugin, Placements, UIEvents } from "pixowor-core";
import { MenubarComponent } from "./menubar.component";
import manifest from "./manifest.json";
import en from "./i18n/en.json";
import zhCN from "./i18n/zh-CN.json";
import { Component, Type } from "@angular/core";
import { NewGameProjectComponent } from "./new-game-project.component";
export class MenubarPlugin extends Plugin {
  constructor(pixoworCore: PixoworCore) {
    super(pixoworCore, manifest);
  }

  async install(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.pixoworCore.fileSystemManager
        .installI18n({
          en: en,
          "zh-CN": zhCN,
        })
        .then(() => {
          this.colorLog(`${this.name} installed!`);
          resolve(true);
        })
        .catch((error) => reject(error));
    });
  }

  activate(): void {
    this.colorLog(`${this.name} activate, Pid: ${this.pid}`);
    this.pixoworCore.workspace.registerSlotComponent(
      Placements.MENUBAR,
      <Type<Component>>MenubarComponent
    );

    this.pixoworCore.stateManager.registerComponent(
      "NewGameProject",
      <Component>NewGameProjectComponent
    );

    this.pixoworCore.workspace.emit(UIEvents.INJECT_SLOT, Placements.MENUBAR);
  }

  deactivate(): void {}
}
