import { Game } from "workbench/app/models";
import { OrderCondition } from "workbench/types/typing";
export declare enum GameActionsType {
    LIST_TEMPLATE_GAMES = "[GAME] ListTemplateGames",
    ORDER_TEMPLATE_GAMES = "[GAME] OrderTemplateGames",
    ORDER_MY_GAMES = "[GAME] OrderMyGames",
    LIST_MY_GAMES = "[GAME] ListMyGames",
    DOWNLOAD_GAME = "[GAME] DownloadGame"
}
export interface Pagination {
    page: number;
    pageSize: number;
}
export declare namespace GameActions {
    class ListTemplateGames {
        static readonly type = GameActionsType.LIST_TEMPLATE_GAMES;
        constructor();
    }
    class OrderTemplateGames {
        payload: OrderCondition;
        static readonly type = GameActionsType.ORDER_TEMPLATE_GAMES;
        constructor(payload: OrderCondition);
    }
    class OrderMyGames {
        payload: OrderCondition;
        static readonly type = GameActionsType.ORDER_MY_GAMES;
        constructor(payload: OrderCondition);
    }
    class ListMyGames {
        static readonly type = GameActionsType.LIST_MY_GAMES;
        constructor();
    }
    class DownloadGame {
        game: Game;
        static readonly type = GameActionsType.DOWNLOAD_GAME;
        constructor(game: Game);
    }
}
