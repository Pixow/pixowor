import { Injectable } from "@angular/core";
import { remote } from "electron";
import * as wget from "wget-improved";
import * as fsa from "fs-extra";
import * as path from "path";
const extract = require("extract-zip");

import { Action, NgxsOnInit, Selector, State, StateContext } from "@ngxs/store";
import { Game, IGame } from "@workbench/app/models";
import { QingWebApiService } from "@workbench/app/core/services";
import { GameActions } from "./game.actions";
import { plainToClass } from "class-transformer";
import { orderBy, sortBy } from "lodash-es";

export interface GameModel {
  templateGames: IGame[];
  myGames: IGame[];
  downloadInfo: {
    gameId: string;
    isDownload: boolean;
    progress: number;
  };
  downloadError: string;
}

@State<GameModel>({
  name: "GameStore",
  defaults: {
    templateGames: [],
    myGames: [],
    downloadInfo: {
      gameId: null,
      isDownload: false,
      progress: 0,
    },
    downloadError: null,
  },
})
@Injectable()
export class GameState {
  constructor(private qingWebApiService: QingWebApiService) {}

  @Selector()
  public static downloadInfo(state: GameModel) {
    return state.downloadInfo;
  }

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
      const { data } = res.data;
      patchState({
        templateGames: data,
      });
    });
  }

  @Action(GameActions.OrderTemplateGames)
  async orderTemplateGames(
    { getState, setState }: StateContext<GameModel>,
    { payload }: GameActions.OrderTemplateGames
  ) {
    const { templateGames } = getState();
    const { field, order } = payload;

    setState({
      ...getState(),
      templateGames: orderBy(templateGames, [field], [order]),
    });
  }

  @Action(GameActions.ListMyGames)
  async listMyGames({ patchState }: StateContext<GameModel>) {
    return this.qingWebApiService.sdk.game.listMyGames().then((res) => {
      console.log("🚀 ~ file: game.state.ts ~ line 80 ~ GameState ~ res.data", res.data);
      const { total, list } = res.data.data;
      patchState({
        myGames: list,
      });
    });
  }

  @Action(GameActions.DownloadGame)
  async downloadGame({ getState, patchState }: StateContext<GameModel>, { game }: GameActions.DownloadGame) {
    const state = getState();
    const outputZipUri = path.join(remote.app.getPath("temp"), `${game._id}.zip`);
    const gameZipUri = game.getGameZipUri(game.lastGameVersion.version);
    const download = wget.download(gameZipUri, outputZipUri);
    download.on("error", (err) => {
      patchState({
        downloadError: err.message,
      });
    });

    download.on("start", (fileSize) => {
      patchState({
        downloadInfo: Object.assign(state.downloadInfo, {
          gameId: game._id,
          isDownload: true,
        }),
      });
    });

    download.on("end", async () => {
      try {
        console.log("game.gameFolder: ", game.gameFolder);
        await extract(outputZipUri, { dir: game.gameFolder });
        fsa.removeSync(outputZipUri);

        patchState({
          downloadInfo: Object.assign(state.downloadInfo, {
            isDownload: false,
          }),
        });
      } catch (error) {
        throw error;
      }
    });

    download.on("progress", (value) => {
      patchState({
        downloadInfo: Object.assign(state.downloadInfo, {
          progress: Math.floor(value * 100),
        }),
      });
    });
  }
}
