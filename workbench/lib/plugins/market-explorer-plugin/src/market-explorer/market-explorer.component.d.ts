import { OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { MarketComponent } from "../../type";
import { AppConfig } from "workbench/types/typing";
export declare class MarketExplorerComponent implements OnInit {
    private store;
    config: AppConfig;
    constructor(store: Store, config: AppConfig);
    components$: Observable<MarketComponent[]>;
    eTotal$: Observable<number>;
    ePageSize$: Observable<number>;
    ngOnInit(): void;
    loadComponent(): void;
    getComponentThumbnail(component: MarketComponent): void;
    paginate(event: any): void;
}
