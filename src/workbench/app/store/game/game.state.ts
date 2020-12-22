import { Injectable } from "@angular/core";
import { Action, NgxsOnInit, State, StateContext } from "@ngxs/store";
import { IGame } from "@workbench/app/models";
import { QingWebApiService } from "@workbench/app/core/services";
import { GameActions } from "./game.actions";

export interface GameModel {
  games: IGame[];
}

@State<GameModel>({
  name: "GameStore",
})
@Injectable()
export class GameState implements NgxsOnInit {
  constructor(private qingWebApiService: QingWebApiService) {}

  ngxsOnInit() {}

  @Action(GameActions.ListMyGames)
  listMyGames({ patchState }: StateContext<GameModel>) {
    return this.qingWebApiService.sdk.game.listTemplateGames().then((res) => {
      console.log("res: ", res);
    });
  }
}
