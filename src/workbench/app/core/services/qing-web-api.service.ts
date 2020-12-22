import { Injectable } from "@angular/core";
import { Environment, IQingWebApiSdk, QingWebApiSdk } from "qing-web-api-sdk";

import { WorkbenchConfig } from "@environment/environment";

@Injectable()
export class QingWebApiService {
  private _sdk: IQingWebApiSdk;
  public get sdk() {
    return this._sdk;
  }

  constructor() {
    // if (WorkbenchConfig.environment === "LOCAL") {
    this._sdk = new QingWebApiSdk(Environment.Alpha);
    // }
  }
}
