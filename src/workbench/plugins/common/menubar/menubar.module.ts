import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MenubarModule } from "primeng/menubar";
import { PixoworCore } from "pixowor-core";

import { MenubarComponent } from "./menubar.component";
import { NewGameProjectComponent } from "./new-game-project.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [MenubarComponent, NewGameProjectComponent],
  imports: [CommonModule, FormsModule, MenubarModule],
  providers: [PixoworCore],
})
export class MenuModule {}
