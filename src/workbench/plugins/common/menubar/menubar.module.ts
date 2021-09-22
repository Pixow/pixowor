import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MenubarModule } from "primeng/menubar";
import { PixoworCore } from "pixowor-core";

import { MenubarComponent } from "./menubar.component";

@NgModule({
  declarations: [MenubarComponent],
  imports: [CommonModule, MenubarModule],
  providers: [PixoworCore],
})
export class MenuModule {}
