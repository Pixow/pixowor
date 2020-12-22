import { IUser } from "./user";

export interface ILuaPackageVersion {
  version: string;
  resources: string[];
  created_at: Date;
  log: string; // 改动日志
}

export interface ILuaPackage {
  _id: string;
  name: string;
  desc: string;
  owner: Partial<IUser>;
  versions: ILuaPackageVersion[];
  publishVersions: ILuaPackageVersion[];
  current_version: string;
  is_private: boolean; // 是否是私有包

  releaseVersions: ILuaPackageVersion[];
  prepare: () => Promise<any>;
  upload: (newVersion: string, log: string) => Promise<any>;
  destroy: () => Promise<any>;
}
