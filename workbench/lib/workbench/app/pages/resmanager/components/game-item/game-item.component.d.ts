import { OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { Game } from "workbench/app/models";
import { Observable } from "rxjs";
export declare enum GameType {
    Template = 1,
    My = 2
}
export declare class GameItemComponent implements OnInit {
    private store;
    type: GameType;
    game: Game;
    isDownload: boolean;
    progress: number;
    constructor(store: Store);
    downloadInfo$: Observable<any>;
    ngOnInit(): void;
    isTemplate(): boolean;
    downloadGame(): void;
}
