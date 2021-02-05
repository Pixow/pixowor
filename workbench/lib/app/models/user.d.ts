export interface IUser {
    id: string;
    username: string;
    nickname: string;
    password: string;
    token: string;
    refreshToken: string;
    avatar: string;
}
export declare class User implements IUser {
    id: string;
    username: string;
    nickname: string;
    password: string;
    token: string;
    refreshToken: string;
    avatar: string;
    constructor(data: Partial<IUser>);
}
