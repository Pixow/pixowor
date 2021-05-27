import * as url from "url";
import * as path from "path";
import * as fsa from "fs-extra";
import { remote } from "electron";

import { WorkbenchConfig } from "workbench/environments/environment";
import { isEmpty, last } from "lodash-es";
import { User } from "./user";

export class GameVersion {
  gameConfig: string;
  createdAt: string;
  version: string;
  commit: string;
}

export class Game {
  _id: string;
  owner: User;
  name: string;
  cover: string; // 封面图
  description: string;
  createdAt: string;
  updatedAt: string;
  lastVersion: string; // 最后修改版本
  releaseVersions: GameVersion[];
  pastVersions: GameVersion[];

  isDownload: boolean = false;

  constructor(data?: Partial<Game>) {
    Object.assign(this, data);
  }

  public get isExists() {
    return fsa.pathExistsSync(this.gameFolder);
  }

  public get lastGameVersion(): GameVersion {
    if (this.lastVersion) {
      return this.pastVersions.find((item) => item.version === this.lastVersion);
    } else {
      return last(this.pastVersions);
    }
  }

  public get gameFolder(): string {
    return path.join(this._storePath, `${this.owner.username}/game/${this._id}`);
  }

  public get gamePiFile(): string {
    return path.join(this.gameFolder, `${this._id}.pi`);
  }

  private get _storePath() {
    return path.join(remote.app.getPath("userData"));
  }

  public getZipFileName(version?: string): string {
    return `${this.owner.username}/game/${this._id}/${version || this.lastGameVersion.version}/${
      this._id
    }.zip`;
  }

  public getTempZipFileName(version?: string): string {
    return `${this._id}_${version || this.lastGameVersion.version}.zip`;
  }

  public getGameZipUri(version?: string): string {
    return url.resolve(WorkbenchConfig.WEB_RESOURCE_URI, this.getZipFileName(version));
  }

  public getScenePiFile(sceneId: number) {
    return path.join(this.gameFolder, `${sceneId}.pi`);
  }
}
