import { StateContext } from "@ngxs/store";
import { MarketActions } from "./market.actions";
import { ContextService } from "workbench/app/core/services";
export interface MarketStateModel {
    components: any[];
    ePagination: {};
    eTotal: number;
}
export declare class MarketState {
    private contextService;
    context: ContextService;
    constructor(contextService: ContextService);
    static components(state: MarketStateModel): any[];
    listComponent({ patchState, getState }: StateContext<MarketStateModel>, { pagination, query }: MarketActions.ListComponent): Promise<void>;
}
