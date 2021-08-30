import "reflect-metadata";
import "@angular/compiler";
import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { Environment } from "./environments/environment";

import { Container } from "typedi";
import { QingCore } from "qing-core";

if (Environment.production) {
  enableProdMode();
}

Container.set("qingCore", new QingCore());

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    preserveWhitespaces: false,
  })
  .catch((err) => console.error(err));
