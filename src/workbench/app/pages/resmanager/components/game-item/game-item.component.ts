import { Component, Input, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Game } from "@workbench/app/models";
import { GameActions, GameState } from "@workbench/app/store";
import { Observable } from "rxjs";

export enum GameType {
  Template = 1,
  My = 2,
}

@Component({
  selector: "game-item",
  templateUrl: "./game-item.component.html",
  styleUrls: ["./game-item.component.scss"],
})
export class GameItemComponent implements OnInit {
  @Input() type: GameType;
  @Input() game: Game;

  isDownload: boolean = false;
  progress = 0;

  constructor(private store: Store) {}

  @Select(GameState.downloadInfo) downloadInfo$: Observable<any>;

  ngOnInit(): void {
    this.downloadInfo$.subscribe((data) => {
      console.log("🚀 ~ file: game-item.component.ts ~ line 30 ~ GameItemComponent ~ data", data);
      if (data.gameId === this.game._id) {
        this.isDownload = data.isDownload;
        this.progress = data.progress;
      }
    });
  }

  public isTemplate() {
    return this.type === GameType.Template;
  }

  downloadGame() {
    // this.store.dispatch(new GameActions.HandledError());
    this.store.dispatch(new GameActions.DownloadGame(this.game));
  }
}
