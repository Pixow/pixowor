import { EditorSigninDto } from "./auth.dto";
export declare enum AuthActionsType {
    INIT_USER = "[AUTH] InitUser",
    EDITOR_SIGNIN = "[AUTH] EditorSignin",
    EDITOR_SIGNOUT = "[AUTH] EditorSignout"
}
export declare namespace AuthActions {
    class InitUser {
        static readonly type = AuthActionsType.INIT_USER;
        constructor();
    }
    class EditorSignin {
        payload: EditorSigninDto;
        static readonly type = AuthActionsType.EDITOR_SIGNIN;
        constructor(payload: EditorSigninDto);
    }
    class EditorSignout {
        static readonly type = AuthActionsType.EDITOR_SIGNOUT;
        constructor();
    }
}
