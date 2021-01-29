import { User } from "workbench/app/models";
import { NgxsOnInit, StateContext } from "@ngxs/store";
import { Injector } from "@angular/core";
import { AuthActions } from "./auth.actions";
import { LocalStorageService, QingWebApiService } from "workbench/app/core/services";
export interface AuthStateModel {
    user: User;
}
export declare class AuthState implements NgxsOnInit {
    private injector;
    private qingWebApiService;
    private localStorageService;
    context: any;
    constructor(injector: Injector, qingWebApiService: QingWebApiService, localStorageService: LocalStorageService);
    static user(state: AuthStateModel): User;
    ngxsOnInit(ctx: StateContext<AuthStateModel>): void;
    InitUser({ patchState }: StateContext<AuthStateModel>): Promise<void>;
    editorSignin({ patchState }: StateContext<AuthStateModel>, { payload }: AuthActions.EditorSignin): Promise<any>;
    editorSignout(): void;
}
