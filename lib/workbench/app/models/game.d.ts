import { IUser } from "./user";
export interface IGameVersion {
    gameConfig: string;
    createdAt: string;
    version: string;
    commit: string;
}
export interface IGame {
    _id: string;
    owner: Partial<IUser>;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    releaseVersions: IGameVersion[];
    pastVersions: IGameVersion[];
}
export declare class Game implements IGame {
    _id: string;
    owner: Partial<IUser>;
    name: string;
    cover: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    lastVersion: string;
    releaseVersions: IGameVersion[];
    pastVersions: IGameVersion[];
    constructor(data?: Partial<IGame>);
    get gameCover(): string;
    get isExists(): any;
    get lastGameVersion(): IGameVersion;
    get gameFolder(): string;
    private get _storePath();
    getGameZipUri(version: string): string;
}
