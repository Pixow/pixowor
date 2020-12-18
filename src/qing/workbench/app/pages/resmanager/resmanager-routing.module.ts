import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ResmanagerComponent } from "./resmanager.component";

const routes: Routes = [
  {
    path: "resmanager",
    component: ResmanagerComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResmanagerRoutingModule {}
