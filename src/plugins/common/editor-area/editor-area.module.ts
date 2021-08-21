import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TabViewModule } from "primeng/tabview";
import { EditorAreaComponent } from "./editor-area.component";

@NgModule({
  imports: [CommonModule, TabViewModule],
  declarations: [EditorAreaComponent],
})
export class StageModule {}
