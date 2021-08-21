export class User {
  public id: string;
  public username: string;
  public nickname: string;
  public password: string;
  public token: string;
  public refreshToken: string;
  public avatar: string;

  constructor(data: Partial<User>) {
    Object.assign(this, data);
  }
}
