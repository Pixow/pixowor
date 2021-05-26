import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxsModule } from "@ngxs/store";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { ErrorHandlerService } from "./core/services";
import { ActivitybarComponent } from "workbench/app/slots/activitybar/activitybar.component";
import { ExplorerComponent } from "workbench/app/slots/explorer/explorer.component";
import { HttpClientModule } from "@angular/common/http";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";
import { StageComponent } from "workbench/app/slots/stage/stage.component";
import { ExtensionsComponent } from "workbench/app/slots/extensions/extensions.component";
import { StatusbarComponent } from "workbench/app/slots/statusbar/statusbar.component";
import { SharedModule } from "workbench/app/shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    ActivitybarComponent,
    ExplorerComponent,
    StageComponent,
    ExtensionsComponent,
    StatusbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastModule,
    NgxsModule.forRoot([]),
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
