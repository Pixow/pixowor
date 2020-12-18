import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { ResmanagerComponent } from "./pages/resmanager/resmanager.component";
import { SigninComponent } from "./pages/signin/signin.component";

@NgModule({
  declarations: [AppComponent, SigninComponent, ResmanagerComponent],
  imports: [BrowserModule, CoreModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
