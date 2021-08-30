import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MenubarModule } from "primeng/menubar";
import { QingCore } from "qing-core";

import { MenubarComponent } from "./menubar.component";

@NgModule({
  declarations: [MenubarComponent],
  imports: [CommonModule, MenubarModule],
  providers: [QingCore],
})
export class MenuModule {}
