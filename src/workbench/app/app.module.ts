import { ErrorHandler, InjectionToken, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { remote, ipcMain, ipcRenderer } from "electron";
import * as path from "path";
import * as fileStorage from "electron-json-storage";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { ErrorHandlerService } from "./core/services";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";
import { Environment } from "@workbench/environments/environment";
import { SharedModule } from "@workbench/app/shared/shared.module";
import { DialogService } from "primeng/dynamicdialog";
import { PixoworCore, Settings } from "pixowor-core";
import { PLUGIN_CONF_FILE, PLUGIN_DIR, PLUGIN_SERVER } from "./app.config";
import { PluginsManageModule } from "@workbench/plugins/integration/plugins-manage/plugins-manage.module";
import { TranslocoRootModule } from "./transloco/transloco-root.module";
import { NgxTippyModule } from 'ngx-tippy-wrapper';

import pkg from "../../../package.json";

function initPixoworCore() {
  fileStorage.setDataPath(path.join(remote.app.getPath("userData"), "Runtime"));
  let settings = fileStorage.getSync("settings");
  console.log("🚀 ~ file: app.module.ts ~ line 30 ~ initPixoworCore ~ settings", settings);

  settings = Object.assign(settings, Environment, { version: pkg.version });

  fileStorage.set("settings", settings, () => { });

  const pixoworCore = new PixoworCore(settings as Settings);

  pixoworCore.fileStorage = fileStorage;
  pixoworCore.ipcMain = ipcMain;
  pixoworCore.ipcRenderer = ipcRenderer;

  return pixoworCore;
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
    TranslocoRootModule,
    NgxTippyModule
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
export class AppModule { }
