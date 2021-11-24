import { Component, Inject } from "@angular/core";
import { EDITING_GAME, PixoworCore, Severity } from "pixowor-core";
import * as path from "path";
import { Capsule } from "game-capsule";
import { DynamicDialogRef } from "primeng/dynamicdialog";

@Component({
  selector: "new-game-project",
  template: `
    <div class="new-game-project">
      <input [(ngModel)]="name" />

      <button (click)="create()">OK</button>
    </div>
  `,
  styles: [``],
})
export class NewGameProjectComponent {
  name = "";

  constructor(
    @Inject(PixoworCore) private pixoworCore: PixoworCore,
    private ref: DynamicDialogRef
  ) { }

  public async create() {
    const { GAME_PROJECTS_PATH } = this.pixoworCore.settings;
    const gameDir = path.join(GAME_PROJECTS_PATH, this.name);
    const cap = new Capsule();
    cap.add.game();

    this.pixoworCore.fileSystem
      .writeFile(path.join(gameDir, `${this.name}.pi`), cap.serialize())
      .then((data) => {
        console.log(data);
        this.pixoworCore.workspace.toast(Severity.SUCCESS, "Create Success!");

        //TODO: Open Game Project
        this.pixoworCore.setEditingObject(EDITING_GAME, { file: this.name, filePath: gameDir })

        this.ref.close();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
