export interface IUser {
  id: string;
  username: string;
  nickname: string;
  password: string;
  token: string;
  refreshToken: string;
  avatar: string;

  // avatarUrl: string | null;
}

export class User implements IUser {
  public id: string;
  public username: string;
  public nickname: string;
  public password: string;
  token: string;
  refreshToken: string;
  avatar: string;

  constructor(data: Partial<IUser>) {
    Object.assign(this, data);
  }

  // public get avatarUrl() {
  //   if (this.avatar) {
  //     return url.resolve(WorkbenchConfig.WEB_RESOURCE_URI, this.avatar);
  //   } else {
  //     return null;
  //   }
  // }
}
