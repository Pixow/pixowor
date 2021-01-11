import { CommonModule } from "@angular/common";
import { Injector, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CarouselModule } from "primeng/carousel";
import { ProgressBarModule } from "primeng/progressbar";
import { CheckboxModule } from "primeng/checkbox";

import { MarketExplorerComponent } from "./src/market-explorer/market-explorer.component";
import { createCustomElement } from "@angular/elements";

@NgModule({
  declarations: [MarketExplorerComponent],
  imports: [CommonModule, CarouselModule, FormsModule, ReactiveFormsModule, ProgressBarModule, CheckboxModule],
  exports: [MarketExplorerComponent],
  entryComponents: [MarketExplorerComponent],
})
export class MarketExplorerPluginModule {
  constructor(injector: Injector) {
    const MarketExplorerElement = createCustomElement(MarketExplorerComponent, { injector });
    customElements.define("activity-bar", MarketExplorerElement);
  }
}
