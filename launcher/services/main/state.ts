// 全局状态管理，主题、当前语言、当前用户
import * as fs from "fs";
import * as path from "path";
import { isUndefined, isEqual } from "lodash-es";
import { ILogService } from "./log";
import { app } from "electron";

type StorageDatabase = { [key: string]: any };

export class FileStorage {
  private _database: StorageDatabase | null = null;
  private lastFlushedSerializedDatabase: string | null = null;

  constructor(private dbPath: string, private onError: (error: Error) => void) {}

  private get database(): StorageDatabase {
    if (!this._database) {
      this._database = this.loadSync();
    }

    return this._database;
  }

  private loadSync(): StorageDatabase {
    try {
      this.lastFlushedSerializedDatabase = fs.readFileSync(this.dbPath).toString();

      return JSON.parse(this.lastFlushedSerializedDatabase);
    } catch (error) {
      if (error.code !== "ENOENT") {
        this.onError(error);
      }

      return {};
    }
  }

  getItem<T>(key: string): T | undefined {
    return this.database[key];
  }

  setItem(key: string, data): void {
    this.database[key] = data;
    this.saveSync();
  }

  removeItem(key: string) {
    if (!isUndefined(this.database[key])) {
      this.database[key] = undefined;
      this.saveSync();
    }
  }

  private saveSync(): void {
    const serializedDatabase = JSON.stringify(this.database, null, 4);
    if (isEqual(serializedDatabase, this.lastFlushedSerializedDatabase)) {
      return;
    }

    try {
      this.lastFlushedSerializedDatabase = serializedDatabase;
    } catch (error) {
      this.onError(error);
    }
  }
}

export interface IStateService {
  getItem<T>(key: string): T;
  setItem(key: string, data: any): void;
  removeItem(key: string): void;
}

export class StateService implements IStateService {
  private static readonly STATE_FILE = "storage.json";

  private fileStorage: FileStorage;

  constructor(logService: ILogService) {
    this.fileStorage = new FileStorage(
      path.join(app.getAppPath(), StateService.STATE_FILE),
      (error) => logService.error(error)
    );
  }

  getItem<T>(key: string): T {
    return this.fileStorage.getItem(key);
  }

  setItem(key: string, data: any): void {
    this.fileStorage.setItem(key, data);
  }

  removeItem(key: string): void {
    this.fileStorage.removeItem(key);
  }
}
