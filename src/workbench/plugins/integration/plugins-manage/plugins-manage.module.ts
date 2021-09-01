import { NgModule } from "@angular/core";
import { AccordionModule } from "primeng/accordion";
import { FileUploadModule } from "primeng/fileupload";
import { TieredMenuModule } from "primeng/tieredmenu";
import { TabViewModule } from "primeng/tabview";
import { CommonModule } from "@angular/common";
import { QingCore } from "qing-core";

import { PluginsManageComponent } from "./plugins-manage.component";
import { PluginItemComponent } from "./components/plugin-item/plugin-item.component";
import { PluginsManageService } from "./plugins-manage.service";

@NgModule({
  imports: [CommonModule, AccordionModule, FileUploadModule, TieredMenuModule, TabViewModule],
  declarations: [PluginsManageComponent, PluginItemComponent],
  providers: [QingCore, PluginsManageService],
})
export class PluginsManageModule {}
