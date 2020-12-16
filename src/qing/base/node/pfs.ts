import * as fs from "fs";

export interface IWriteFileOptions {
  mode?: number;
  flag?: string;
}

interface IEnsuredWriteFileOptions extends IWriteFileOptions {
  mode: number;
  flag: string;
}

export function writeFileSync(path: string, data: string | Buffer, options?: IWriteFileOptions): void {
  const ensuredOptions = ensureWriteOptions(options);

  const fd = fs.openSync(path, ensuredOptions.flag, ensuredOptions.mode);

  try {
    fs.writeFileSync(fd, data);

    try {
      fs.fdatasyncSync(fd);
    } catch (syncError) {
      console.warn("[node.js fs] fdatasyncSync is now disabled for this session because it failed: ", syncError);
    }
  } finally {
    fs.closeSync(fd);
  }
}

function ensureWriteOptions(options?: IWriteFileOptions): IEnsuredWriteFileOptions {
  if (!options) {
    return {
      mode: 0o666,
      flag: "w",
    };
  }

  return {
    mode: typeof options.mode === "number" ? options.mode : 0o666,
    flag: typeof options.flag === "string" ? options.flag : "w",
  };
}
