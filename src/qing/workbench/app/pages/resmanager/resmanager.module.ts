import { NgModule } from "@angular/core";
import { ResmanagerRoutingModule } from "./resmanager-routing.module";
import { ResmanagerComponent } from "./resmanager.component";

@NgModule({
  declarations: [ResmanagerComponent],
  imports: [ResmanagerRoutingModule],
})
export class ResmanagerModule {}
