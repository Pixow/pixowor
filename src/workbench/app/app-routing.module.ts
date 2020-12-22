import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResmanagerRoutingModule } from "./pages/resmanager/resmanager-routing.module";
import { SigninRoutingModule } from "./pages/signin/signin-routing.module";
import { PageNotFoundComponent } from "./shared/components";

const routes: Routes = [
  {
    path: "",
    redirectTo: "signin",
    pathMatch: "full",
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" }),
    SigninRoutingModule,
    ResmanagerRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
