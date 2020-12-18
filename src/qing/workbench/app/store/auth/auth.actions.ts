import { EditorSigninDto } from "./auth.dto";

export enum AuthActionsType {
  EDITOR_SIGNIN = "[AUTH] EditorSignin",
}

export namespace AuthActions {
  export class EditorSignin {
    public static readonly type = AuthActionsType.EDITOR_SIGNIN;

    constructor(public payload: EditorSigninDto) {}
  }
}
