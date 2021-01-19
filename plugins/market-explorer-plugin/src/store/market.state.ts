import { Injectable, Injector } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { MarketActions } from "./market.actions";
import { ContextService } from "workbench/app/core/services";

export interface MarketStateModel {
  components: any[];
  ePagination: {};
  eTotal: number;
}

@State<MarketStateModel>({
  name: "MarketStore",
  defaults: {
    components: [],
    ePagination: {
      page: 1,
      pageSize: 50,
    },
    eTotal: 0,
  },
})
@Injectable()
export class MarketState {
  context: ContextService;

  constructor(private contextService: ContextService) {}

  @Selector()
  public static components(state: MarketStateModel) {
    return state.components;
  }

  // @Selector()
  // public static eTotal(state: MarketStateModel) {
  //   return state.eTotal;
  // }

  @Action(MarketActions.ListComponent)
  async listComponent(
    { patchState, getState }: StateContext<MarketStateModel>,
    { pagination, query }: MarketActions.ListComponent
  ) {
    const state = getState();

    pagination = Object.assign(state.ePagination, pagination);

    this.contextService.sdk.component.listMarketComponents(pagination, query).then((res) => {
      const { code, data, total } = res.data;

      patchState({ eTotal: total, components: data });
    });
  }
}
