import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TabViewModule } from "primeng/tabview";
import { TieredMenuModule } from "primeng/tieredmenu";
import { QingCore } from "qing-core";

import { EditorAreaComponent } from "./editor-area.component";

@NgModule({
  imports: [CommonModule, TabViewModule, TieredMenuModule],
  declarations: [EditorAreaComponent],
  providers: [QingCore],
})
export class StageModule {}
