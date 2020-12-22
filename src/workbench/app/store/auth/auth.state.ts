import { IUser, User } from "src/workbench/app/models";
import { Action, NgxsOnInit, Select, Selector, State, StateContext } from "@ngxs/store";
import { LocalStorageService, QingWebApiService } from "@workbench/app/core/services";
import { Injectable } from "@angular/core";
import { AuthActions } from "./auth.actions";
import { WorkbenchConfig } from "@environment/environment";

export interface AuthStateModel {
  user: User;
}

@State<AuthStateModel>({
  name: "AuthStore",
  defaults: {
    user: null,
  },
})
@Injectable()
export class AuthState implements NgxsOnInit {
  constructor(private qingWebApiService: QingWebApiService, private localStorageService: LocalStorageService) {}

  ngxsOnInit() {}

  @Action(AuthActions.EditorSignin)
  editorSignin({ patchState }: StateContext<AuthStateModel>, { payload }: AuthActions.EditorSignin) {
    const { account, password } = payload;

    return this.qingWebApiService.sdk.auth.editorSignin(account, password).then((res) => {
      patchState({
        user: res.data,
      });

      this.localStorageService.set(WorkbenchConfig.storagekeys.USER_STORAGE_KEY, res.data);
    });
  }

  @Action(AuthActions.EditorSignout)
  editorSignout() {
    this.localStorageService.remove(WorkbenchConfig.storagekeys.USER_STORAGE_KEY);
  }
}
