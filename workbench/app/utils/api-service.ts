import { USER_STORAGE_KEY } from "workbench/consts";
import { Environment, IQingWebApiSdk, QingWebApiSdk } from "qing-web-api-sdk";
import { LocalStorage } from "./localstorage";
import { IUser } from "workbench/app/models/user";

export class ApiService {
  private _sdk: IQingWebApiSdk;
  public get sdk() {
    return this._sdk;
  }

  constructor() {
    this._sdk = new QingWebApiSdk(Environment.Alpha);
    const user = LocalStorage.get(USER_STORAGE_KEY);
    if (user) {
      this.setInterceptors(user);
    }
  }

  public setInterceptors(user: IUser) {
    this._sdk.setRequestInterceptor(
      async (config) => {
        config.headers = {
          "X-Pixelpai-TK": user.token,
        };
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );

    this._sdk.setResponseInterceptor(
      (response) => {
        return response;
      },
      async (error) => {
        console.log("🚀 ~ file: api-service.ts ~ line 36 ~ ApiService ~ error", error);
        const originalRequest = error.config;
        if (
          error.response.status === 403 ||
          (error.response.status === 401 && !originalRequest._retry)
        ) {
          originalRequest._retry = true;

          this._sdk.auth
            .refreshToken(user.token, user.refreshToken)
            .then((res) => {
              this._sdk.setToken(res.data.token);
              return this._sdk.req(originalRequest);
            })
            .catch((error) => {
              return Promise.reject(error);
            });
        }

        return Promise.reject(error);
      }
    );
  }
}
