import { StateContext } from "@ngxs/store";
import { Game, IGame } from "workbench/app/models";
import { QingWebApiService } from "workbench/app/core/services";
import { GameActions } from "./game.actions";
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
export declare class GameState {
    private qingWebApiService;
    constructor(qingWebApiService: QingWebApiService);
    static downloadInfo(state: GameModel): {
        gameId: string;
        isDownload: boolean;
        progress: number;
    };
    static templateGames(state: GameModel): Game[];
    static myGames(state: GameModel): Game[];
    listTemplateGames({ patchState }: StateContext<GameModel>): Promise<void>;
    orderTemplateGames({ getState, setState }: StateContext<GameModel>, { payload }: GameActions.OrderTemplateGames): Promise<void>;
    listMyGames({ patchState }: StateContext<GameModel>): Promise<void>;
    downloadGame({ getState, patchState }: StateContext<GameModel>, { game }: GameActions.DownloadGame): Promise<void>;
}
