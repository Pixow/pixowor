import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { GameManagerComponent } from "./components/game-manager/game-manager.component";

const routes: Routes = [
  {
    path: "game-manager",
    component: GameManagerComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResmanagerRoutingModule {}
