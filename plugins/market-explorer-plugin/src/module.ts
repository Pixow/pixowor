import { CommonModule } from "@angular/common";
import { InjectionToken, Injector, ModuleWithProviders, NgModule } from "@angular/core";
import { NgxsModule } from "@ngxs/store";

import { AccordionModule } from "primeng/accordion";
import { PaginatorModule } from "primeng/paginator";

import { MarketExplorerComponent } from "./market-explorer/market-explorer.component";
import { MarketState } from "./store/market.state";

@NgModule({
  declarations: [MarketExplorerComponent],
  imports: [CommonModule, AccordionModule, PaginatorModule, NgxsModule.forFeature([MarketState])],
  exports: [MarketExplorerComponent],
  entryComponents: [MarketExplorerComponent],
})
export class MarketExplorerPluginModule {
  componentType = MarketExplorerComponent;
  // constructor(injector: Injector) {
  //   const MarketExplorerElement = createCustomElement(MarketExplorerComponent, { injector });
  //   customElements.define("market-explorer", MarketExplorerElement);
  // }
}
