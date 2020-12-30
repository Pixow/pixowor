import { Game, IGame, IGameVersion, ILuaPackage } from "@workbench/app/models";
import { OrderCondition } from "@workbench/types/typing";

export enum GameActionsType {
  LIST_TEMPLATE_GAMES = "[GAME] ListTemplateGames",
  ORDER_TEMPLATE_GAMES = "[GAME] OrderTemplateGames",
  ORDER_MY_GAMES = "[GAME] OrderMyGames",
  LIST_MY_GAMES = "[GAME] ListMyGames",
  DOWNLOAD_GAME = "[GAME] DownloadGame",
}

export interface Pagination {
  page: number;
  pageSize: number;
}

export namespace GameActions {
  export class ListTemplateGames {
    public static readonly type = GameActionsType.LIST_TEMPLATE_GAMES;
    constructor() {}
  }

  export class OrderTemplateGames {
    public static readonly type = GameActionsType.ORDER_TEMPLATE_GAMES;
    constructor(public payload: OrderCondition) {}
  }
  export class OrderMyGames {
    public static readonly type = GameActionsType.ORDER_MY_GAMES;
    constructor(public payload: OrderCondition) {}
  }

  export class ListMyGames {
    public static readonly type = GameActionsType.LIST_MY_GAMES;
    constructor() {}
  }

  export class DownloadGame {
    public static readonly type = GameActionsType.DOWNLOAD_GAME;
    constructor(public game: Game) {}
  }
}
