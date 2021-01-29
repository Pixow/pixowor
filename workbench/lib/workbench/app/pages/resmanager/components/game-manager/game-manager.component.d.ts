import { OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { Game } from "workbench/app/models";
import { OrderCondition } from "workbench/types/typing";
import { Observable } from "rxjs";
export declare class GameManagerComponent implements OnInit {
    private store;
    isLoadTemplateGames: boolean;
    templateGames$: Observable<Game[]>;
    myGames$: Observable<Game[]>;
    downloadInfo$: Observable<any>;
    templateGameOrderConditions: {
        name: string;
        field: string;
        order: string;
    }[];
    myGameOrderConditions: ({
        name: string;
        field: string;
        order: string;
        filed?: undefined;
    } | {
        name: string;
        filed: string;
        order: string;
        field?: undefined;
    })[];
    constructor(store: Store);
    ngOnInit(): void;
    loadTemplateGames(): void;
    loadMyGames(): void;
    orderTemplateGames(orderCondition: OrderCondition): void;
    orderMyGames(orderCondition: OrderCondition): void;
}
