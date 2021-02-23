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
import { HttpClientModule } from "@angular/common/http";
import { ContextModule } from "./context.module";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";
import { StageComponent } from "workbench/app/slots/stage/stage.component";
import { SharedModule } from "workbench/app/shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ActivitybarComponent,
    ExplorerComponent,
    StageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    ResmanagerModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastModule,
    NgxsModule.forRoot([GameState]),
    ContextModule.forRoot(),
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService,
    },
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
