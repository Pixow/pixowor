import { NgModule } from "@angular/core";
import { AccordionModule } from "primeng/accordion";
import { FileUploadModule } from "primeng/fileupload";
import { TieredMenuModule } from "primeng/tieredmenu";
import { CommonModule } from "@angular/common";

import { PluginsMarketComponent } from "./components/plugins-market/plugins-market.component";
import { UploadPluginComponent } from "./components/upload-plugin/upload-plugin.component";
import { PluginItemComponent } from "./components/plugin-item/plugin-item.component";
import { TestPluginComponent } from "./components/test-plugin/test-plugin.component";
import { PluginsMarketService } from "./plugins-market.service";

@NgModule({
  imports: [CommonModule, AccordionModule, FileUploadModule, TieredMenuModule],
  declarations: [
    PluginsMarketComponent,
    PluginItemComponent,
    UploadPluginComponent,
    TestPluginComponent,
  ],
  providers: [PluginsMarketService],
})
export class PluginsMarketModule {}
