import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { PluginsMarketComponent } from "./plugins-market/plugins-market.component";

@NgModule({
  declarations: [PluginsMarketComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [PluginsMarketComponent],
  entryComponents: [PluginsMarketComponent],
  providers: [
    {
      provide: "plugins-market-plugin",
      useValue: PluginsMarketComponent,
    },
  ],
})
export class PluginsMarketPluginModule {}
