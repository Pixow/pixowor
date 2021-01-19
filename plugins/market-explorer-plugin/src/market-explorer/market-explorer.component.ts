import { Component, Inject, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { MarketActions } from "../store/market.actions";
import { Observable } from "rxjs";

import { MarketComponent } from "../../type";
import { MarketState } from "../store/market.state";
import { last } from "lodash-es";
import { AppConfig } from "@qing/types";

// export enum ComponentType {
//   All = "",
//   Element = "ElementNode",
//   Terrain = "TerrainNode",
//   CustomFeaturePack = "CustomNode", // 自定义功能包
//   Effect = "EffectNode",
// }

// export interface Owner {
//   username: string;
//   nickname: string;
// }

// export interface IComponentVersion {
//   version: string;
// }

@Component({
  selector: "market-explorer",
  templateUrl: "./market-explorer.component.html",
  styleUrls: ["./market-explorer.component.scss"],
})
export class MarketExplorerComponent implements OnInit {
  constructor(private store: Store, @Inject(AppConfig) public config: AppConfig) {
    console.log("config: ", config);
  }

  @Select(MarketState.components) components$: Observable<MarketComponent[]>;
  @Select("MarketStore.eTotal") eTotal$: Observable<number>;
  @Select("MarketStore.ePagination.pageSize") ePageSize$: Observable<number>;

  ngOnInit() {}

  public loadComponent() {
    this.store.dispatch(new MarketActions.ListComponent());
  }

  public getComponentThumbnail(component: MarketComponent) {
    const lastVersion = last(component.versions);
    // return this.config.WEB_RESOURCE_URI + lastVersion.resources.find((res) => res.indexOf("_s.png") >= 0);
  }

  public paginate(event) {
    console.log("🚀 ~ file: market-explorer.component.ts ~ line 54 ~ MarketExplorerComponent ~ event", event);
    const { page } = event;
    this.store.dispatch(new MarketActions.ListComponent({ page: page + 1 }));
  }
}
