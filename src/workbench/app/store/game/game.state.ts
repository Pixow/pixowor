import { Injectable } from "@angular/core";
import { Action, NgxsOnInit, Selector, State, StateContext } from "@ngxs/store";
import { Game, IGame } from "@workbench/app/models";
import { QingWebApiService } from "@workbench/app/core/services";
import { GameActions } from "./game.actions";
import { plainToClass } from "class-transformer";

export interface GameModel {
  templateGames: IGame[];
  myGames: IGame[];
}

@State<GameModel>({
  name: "GameStore",
  defaults: {
    templateGames: [],
    myGames: [],
  },
})
@Injectable()
export class GameState {
  constructor(private qingWebApiService: QingWebApiService) {}

  @Selector()
  public static templateGames(state: GameModel) {
    return plainToClass(Game, state.templateGames);
  }

  @Selector()
  public static myGames(state: GameModel) {
    return plainToClass(Game, state.myGames);
  }

  @Action(GameActions.ListTemplateGames)
  async listTemplateGames({ patchState }: StateContext<GameModel>) {
    return this.qingWebApiService.sdk.game.listTemplateGames().then((res) => {
      patchState({
        templateGames: res.data,
      });
    });
  }

  @Action(GameActions.ListMyGames)
  async listMyGames({ patchState }: StateContext<GameModel>) {
    return this.qingWebApiService.sdk.game.listMyGames().then((res) => {
      patchState({
        myGames: res.data,
      });
    });
  }
}
