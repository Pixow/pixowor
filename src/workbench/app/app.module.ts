import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxsModule } from "@ngxs/store";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { SigninModule } from "./pages/signin/signin.module";
import { ResmanagerModule } from "./pages/resmanager/resmanager.module";
import { AuthState } from "./store/auth/auth.state";
import { GameState } from "./store/game/game.state";
import { ErrorHandlerService } from "./core/services";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SigninModule,
    ResmanagerModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([AuthState, GameState]),
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
