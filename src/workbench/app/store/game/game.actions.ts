import { IGame, IGameVersion, ILuaPackage } from "@workbench/app/models";

export enum GameActionsType {
  LIST_TEMPLATE_GAMES = "[GAME] ListTemplateGames",
  LIST_MY_GAMES = "[GAME] ListMyGames",
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

  export class ListMyGames {
    public static readonly type = GameActionsType.LIST_MY_GAMES;
    constructor() {}
  }
}
