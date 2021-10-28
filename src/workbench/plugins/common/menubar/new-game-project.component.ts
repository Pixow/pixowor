import { Component, Inject } from "@angular/core";
import { PixoworCore, Severity } from "pixowor-core";
import * as path from "path";
import { Capsule } from "game-capsule";

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

  constructor(@Inject(PixoworCore) private pixoworCore: PixoworCore) {}

  public async create() {
    const { GAME_PROJECTS_PATH } = this.pixoworCore.settings;
    const gameDir = path.join(GAME_PROJECTS_PATH, this.name);
    await this.pixoworCore.fileSystemManager.mkdir(gameDir);

    const game = new Capsule();

    // await this.pixoworCore.fileSystemManager.writeFile(path.join(gameDir, game));
    this.pixoworCore.workspace.toast(Severity.SUCCESS, "Create Success!");
  }
}
