import { IUser } from "./user";

export interface IGameVersion {
  gameConfig: string;
  createdAt: string;
  version: string;
  commit: string;
}

export interface IGame {
  id: string;
  owner: Partial<IUser>;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  releaseVersions: IGameVersion[];
  pastVersions: IGameVersion[];
}

export class Game implements IGame {
  id: string;
  owner: Partial<IUser>;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  releaseVersions: IGameVersion[];
  pastVersions: IGameVersion[];

  constructor(data?: Partial<IGame>) {
    Object.assign(this, data);
  }
}
