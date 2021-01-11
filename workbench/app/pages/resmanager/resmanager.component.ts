import { Component } from "@angular/core";
import { Store } from "@ngxs/store";
import { ElectronService } from "workbench/app/core/services";
import { GameActions } from "workbench/app/store/game/game.actions";

@Component({
  selector: "resmanager",
  templateUrl: "./resmanager.component.html",
  styleUrls: ["./resmanager.component.scss"],
})
export class ResmanagerComponent {
  constructor(private electronService: ElectronService, private store: Store) {
    store.dispatch(new GameActions.ListMyGames());
  }
}
