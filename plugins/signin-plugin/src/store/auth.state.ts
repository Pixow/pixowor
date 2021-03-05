import { plainToClass } from "class-transformer";
import { IUser, User } from "workbench/app/models";
import { Action, NgxsOnInit, Select, Selector, State, StateContext } from "@ngxs/store";
import { Injectable, Injector } from "@angular/core";
import { AuthActions } from "./auth.actions";
import { WorkbenchConfig } from "workbench/environments/environment";
import { QingWebApiService } from "workbench/app/core/services";

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
  context;
  constructor(private injector: Injector, private qingWebApiService: QingWebApiService) {}

  @Selector()
  public static user(state: AuthStateModel) {
    return plainToClass(User, state.user);
  }

  ngxsOnInit(ctx: StateContext<AuthStateModel>) {
    ctx.dispatch(new AuthActions.InitUser());
  }

  @Action(AuthActions.InitUser)
  async InitUser({ patchState }: StateContext<AuthStateModel>) {
    patchState({});
  }

  @Action(AuthActions.EditorSignin)
  async editorSignin(
    { patchState }: StateContext<AuthStateModel>,
    { payload }: AuthActions.EditorSignin
  ) {
    const { account, password } = payload;

    return this.context.sdk.auth.editorSignin(account, password).then((res) => {
      const { data } = res.data;
      patchState({
        user: data,
      });
    });
  }

  @Action(AuthActions.EditorSignout)
  editorSignout() {}
}
