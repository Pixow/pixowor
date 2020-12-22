import { EditorSigninDto } from "./auth.dto";

export enum AuthActionsType {
  EDITOR_SIGNIN = "[AUTH] EditorSignin",
  EDITOR_SIGNOUT = "[AUTH] EditorSignout",
}

export namespace AuthActions {
  export class EditorSignin {
    public static readonly type = AuthActionsType.EDITOR_SIGNIN;

    constructor(public payload: EditorSigninDto) {}
  }

  export class EditorSignout {
    public static readonly type = AuthActionsType.EDITOR_SIGNOUT;

    constructor() {}
  }
}
