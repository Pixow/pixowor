import { IGame, IGameVersion, ILuaPackage } from "@workbench/app/models";

export enum GameActionsType {
  CHANGE_MENU = "[GAME] ChangeMenu",
  LIST_TEMPLATE_GAMES = "[GAME] ListTemplateGames",
  LIST_MY_GAMES = "[GAME] ListMyGames",
  LIST_TEAMWORK_GAMES = "[GAME] ListTeamworkGames",
  SHARE_GAME = "[GAME] ShareGame",
  LOAD_MORE_GAMES = "[GAME] LoadMoreGames",
  EDIT_GAME = "[GAME] EditGame",
  CREATE_GAME = "[GAME] CreateGame",
  ADD_GAME_VERSION = "[GAME] AddGameVersion",
  DELETE_GAME = "[GAME] DeleteGame",
  ADD_DEPENDENCY = "[GAME] AddDependency",
  REMOVE_DEPENDENCY = "[GAME] RemoveDependency",
  LOCK_GAME = "[GAME] LockGame",
  UN_LOCK_GAME = "[GAME] UnLockGame",
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

  export class ListTeamworkGames {
    public static readonly type = GameActionsType.LIST_TEAMWORK_GAMES;
    constructor() {}
  }
  export class ShareGame {
    public static readonly type = GameActionsType.SHARE_GAME;
    constructor(public teamworkId: string, public gameId: string, public owner: string) {}
  }

  export class LoadMoreMine {
    public static readonly type = GameActionsType.LOAD_MORE_GAMES;
    constructor() {}
  }

  export class EditGame {
    public static readonly type = GameActionsType.EDIT_GAME;
    constructor(public game: IGame) {}
  }

  export class AddGameVersion {
    public static readonly type = GameActionsType.ADD_GAME_VERSION;
    constructor(public gameId: string, public gameVersion: Partial<IGameVersion>) {}
  }

  export class DeleteGame {
    public static readonly type = GameActionsType.DELETE_GAME;
    constructor(public payload: string) {}
  }

  export class AddDependency {
    public static readonly type = GameActionsType.ADD_DEPENDENCY;
    constructor(public luapkg: ILuaPackage, public version: string) {}
  }

  export class RemoveDependency {
    public static readonly type = GameActionsType.REMOVE_DEPENDENCY;
    constructor(public luapkgName: string) {}
  }

  export class LockGame {
    public static readonly type = GameActionsType.LOCK_GAME;
    constructor(public gameId: string) {}
  }
  export class UnLockGame {
    public static readonly type = GameActionsType.LOCK_GAME;
    constructor(public gameId: string) {}
  }
}
