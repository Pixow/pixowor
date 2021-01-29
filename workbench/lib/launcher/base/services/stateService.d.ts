import { IEnvironmentService } from "./environmentService";
import { ILogService } from "./logService";
export declare class FileStorage {
    private dbPath;
    private onError;
    private _database;
    private lastFlushedSerializedDatabase;
    constructor(dbPath: string, onError: (error: Error) => void);
    private get database();
    private loadSync;
    getItem<T>(key: string): T | undefined;
    setItem(key: string, data: any): void;
    removeItem(key: string): void;
    private saveSync;
}
export interface IStateService {
    getItem<T>(key: string): T;
    setItem(key: string, data: any): void;
    removeItem(key: string): void;
}
export declare class StateService implements IStateService {
    private static readonly STATE_FILE;
    private fileStorage;
    constructor(environmentService: IEnvironmentService, logService: ILogService);
    getItem<T>(key: string): T;
    setItem(key: string, data: any): void;
    removeItem(key: string): void;
}
