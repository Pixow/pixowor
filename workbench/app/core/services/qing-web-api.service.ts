import { Injectable } from "@angular/core";
import { Environment, IQingWebApiSdk, QingWebApiSdk } from "qing-web-api-sdk";

import { IUser } from "../../models/user";
import { Router } from "@angular/router";
// import { AuthState } from "workbench/app/store/auth/auth.state";

@Injectable({
  providedIn: "root",
})
export class QingWebApiService {
  static instance: QingWebApiService;

  private _sdk: IQingWebApiSdk;
  public get sdk() {
    return this._sdk;
  }

  constructor(private router: Router) {
    console.log("Qing web api service init");
    // if (WorkbenchConfig.environment === "LOCAL") {
    this._sdk = new QingWebApiSdk(Environment.Alpha);
    // }

    QingWebApiService.instance = this;
  }

  setInterceptors(user: IUser) {
    this._sdk.setRequestInterceptor(
      async (config) => {
        config.headers = {
          "X-Pixelpai-TK": user.token,
        };
        return config;
      },
      (error) => {
        this.router.navigateByUrl("signin");
        Promise.reject(error);
      }
    );

    this._sdk.setResponseInterceptor(
      (response) => {
        return response;
      },
      async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 403 || (error.response.status === 401 && !originalRequest._retry)) {
          originalRequest._retry = true;

          this._sdk.auth
            .refreshToken(user.token, user.refreshToken)
            .then((res) => {
              this._sdk.setToken(res.data.token);
              return this._sdk.req(originalRequest);
            })
            .catch((error) => {
              this.router.navigateByUrl("signin");
              return Promise.reject(error);
            });
        }

        return Promise.reject(error);
      }
    );
  }
}
