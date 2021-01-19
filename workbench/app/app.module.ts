import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxsModule } from "@ngxs/store";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { ResmanagerModule } from "./pages/resmanager/resmanager.module";
import { GameState } from "./store/game/game.state";
import { ErrorHandlerService } from "./core/services";
import { MenuComponent } from "workbench/app/slots/menu/menu.component";
import { ActivitybarComponent } from "workbench/app/slots/activitybar/activitybar.component";
import { ExplorerComponent } from "workbench/app/slots/explorer/explorer.component";
import { ContextModule } from "./context.module";

@NgModule({
  declarations: [AppComponent, MenuComponent, ActivitybarComponent, ExplorerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    ResmanagerModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([GameState]),
    ContextModule.forRoot(),
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
