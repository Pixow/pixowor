export interface IUser {
  id: string;
  username: string;
  nickname: string;
  password: string;
}

export class User implements IUser {
  public id: string;
  public username: string;
  public nickname: string;
  public password: string;

  constructor() {}
}
