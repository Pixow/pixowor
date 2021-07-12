import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {TabViewModule} from 'primeng/tabview'
import { StageComponent } from "./stage.component";

@NgModule({
  imports: [CommonModule, TabViewModule],
  declarations: [StageComponent]
})
export class StageModule {
  
}