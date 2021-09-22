import { ErrorHandler, InjectionToken, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxsModule } from "@ngxs/store";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { remote } from "electron";
import * as path from "path";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { ErrorHandlerService } from "./core/services";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";
import { Environment } from "@workbench/environments/environment";
import { SharedModule } from "@workbench/app/shared/shared.module";
import { DialogService } from "primeng/dynamicdialog";
import { PixoworCore, Env } from "pixowor-core";
import { Area } from "pixow-api";
import { PLUGIN_CONF_FILE, PLUGIN_DIR, PLUGIN_SERVER } from "./app.config";
import { PluginsManageModule } from "@workbench/plugins/integration/plugins-manage/plugins-manage.module";
import { TranslocoRootModule } from "./transloco/transloco-root.module";

import pkg from "../../../package.json";

function initPixoworCore() {
  const env: Env = Object.assign(Environment, {
    APP_PATH: remote.app.getAppPath(),
    APP_DATA_PATH: remote.app.getPath("appData"),
    USER_DATA_PATH: remote.app.getPath("userData"),
    TEMP_PATH: remote.app.getPath("temp"),
    area: Area.CNDEV,
  });

  return new PixoworCore(pkg.version, env);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastModule,
    //  FIX: 之前没import，不报错
    // 不引入报错： core.js:10069 NG0303: Can't bind to 'ngForOf' since it isn't a known property of 'ng-container'.
    // TODO: 思考到底是导入module之后再使用componentFactory，还是直接使用 componentFactory
    // 参考：https://github.com/paucls/angular-pluggable-architecture/blob/master/dashboard/src/app/dashboard/dashboard/dashboard.component.ts
    PluginsManageModule,
    NgxsModule.forRoot([]),
    TranslocoRootModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService,
    },
    // TODO: Write these config to one config file
    {
      provide: PLUGIN_SERVER,
      useValue: "http://localhost:45326/plugins",
    },
    {
      provide: PLUGIN_CONF_FILE,
      useValue: path.join(remote.app.getPath("userData"), "plugins/plugin-conf.json"),
    },
    {
      provide: PLUGIN_DIR,
      useValue: path.join(remote.app.getPath("userData"), "plugins"),
    },
    DialogService,
    MessageService,
    {
      provide: PixoworCore,
      useFactory: initPixoworCore,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
