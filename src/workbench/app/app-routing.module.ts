import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "./core/services/auth-guard.service";
import { GameManagerComponent } from "./pages/resmanager/components/game-manager/game-manager.component";
import { PluginManagerComponent } from "./pages/resmanager/components/plugin-manager/plugin-manager.component";
import { ResmanagerComponent } from "./pages/resmanager/resmanager.component";
import { SigninComponent } from "./pages/signin/signin.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "resmanager",
  },
  {
    path: "signin",
    component: SigninComponent,
  },
  {
    path: "resmanager",
    canActivate: [AuthGuardService],
    component: ResmanagerComponent,
    children: [
      { path: "", pathMatch: "full", redirectTo: "game-manager" },
      { path: "game-manager", component: GameManagerComponent },
      { path: "plugin-manager", component: PluginManagerComponent },
    ],
  },
  { path: "**", component: ResmanagerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
