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
    isDownload: boolean;
    constructor(data?: Partial<IGame>);
    get gameCover(): string;
    get isExists(): any;
    get lastGameVersion(): IGameVersion;
    get gameFolder(): string;
    get gamePiFile(): string;
    private get _storePath();
    getZipFileName(version?: string): string;
    getTempZipFileName(version?: string): string;
    getGameZipUri(version?: string): string;
    getScenePiFile(sceneId: number): string;
}
