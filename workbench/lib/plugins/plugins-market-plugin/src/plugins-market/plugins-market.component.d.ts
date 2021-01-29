import { OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { ContextService } from "workbench/app/core/services/context.service";
export declare class PluginsMarketComponent implements OnInit {
    private store;
    private context;
    constructor(store: Store, context: ContextService);
    ngOnInit(): void;
}
