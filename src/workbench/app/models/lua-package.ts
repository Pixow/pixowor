import { User } from "./user";

export class LuaPackageVersion {
  version: string;
  resources: string[];
  created_at: Date;
  log: string; // 改动日志

  constructor(data: LuaPackageVersion) {
    Object.assign(this, data);
  }
}

export class LuaPackage {
  _id: string;
  name: string;
  desc: string;
  owner: Partial<User>;
  versions: LuaPackageVersion[];
  publishVersions: LuaPackageVersion[];
  current_version: string;
  is_private: boolean; // 是否是私有包

  releaseVersions: LuaPackageVersion[];

  constructor(data: LuaPackage) {
    Object.assign(this, data);
  }
}
