import { plainToClass } from "class-transformer";
import { IUser, User } from "@workbench/app/models";
import { Action, NgxsOnInit, Select, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { AuthActions } from "./auth.actions";
import { WorkbenchConfig } from "@environment/environment";
import { LocalStorageService, QingWebApiService } from "@workbench/app/core/services";

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

  @Selector()
  public static user(state: AuthStateModel) {
    return plainToClass(User, state.user);
  }

  ngxsOnInit(ctx: StateContext<AuthStateModel>) {
    ctx.dispatch(new AuthActions.InitUser());
  }

  @Action(AuthActions.InitUser)
  async InitUser({ patchState }: StateContext<AuthStateModel>) {
    patchState({
      user: this.localStorageService.get(WorkbenchConfig.storagekeys.USER_STORAGE_KEY),
    });
  }

  @Action(AuthActions.EditorSignin)
  async editorSignin({ patchState }: StateContext<AuthStateModel>, { payload }: AuthActions.EditorSignin) {
    const { account, password } = payload;

    return this.qingWebApiService.sdk.auth.editorSignin(account, password).then((res) => {
      const { data } = res.data;
      patchState({
        user: data,
      });

      this.localStorageService.set(WorkbenchConfig.storagekeys.USER_STORAGE_KEY, data);
    });
  }

  @Action(AuthActions.EditorSignout)
  editorSignout() {
    this.localStorageService.remove(WorkbenchConfig.storagekeys.USER_STORAGE_KEY);
  }
}