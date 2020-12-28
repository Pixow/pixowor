import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Game } from "@workbench/app/models";
import { GameActions, GameState } from "@workbench/app/store";
import { Observable } from "rxjs";

@Component({
  selector: "game-manager",
  templateUrl: "./game-manager.component.html",
  styleUrls: ["./game-manager.component.scss"],
})
export class GameManagerComponent implements OnInit {
  public isLoadTemplateGames: boolean = false;
  @Select(GameState.templateGames) templateGames$: Observable<Game[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loadTemplateGames();
  }

  public loadTemplateGames() {
    this.isLoadTemplateGames = true;
    this.store.dispatch(new GameActions.ListTemplateGames()).subscribe(() => {
      this.isLoadTemplateGames = false;
    });
  }
}
