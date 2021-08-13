import * as fs from "fs";
import * as path from "path";

export function readFileSync(filePath: string, isJson: boolean = false) {
  let result, error;

  try {
    result = fs.readFileSync(filePath, { encoding: "utf8" });
    result = isJson ? JSON.parse(result) : result;
    error = null;
  } catch (e) {
    error = e;
    result = null;
  }
}

export function isFileExists(path) {
  return fs.existsSync(path);
}

export interface FileStat {
  type: string;
  file: string;
  path: string;
  files?: FileStat[];
}

export function listdir(dirPath: string, arrayOfFiles: FileStat[] = []): FileStat[] {
  const files = fs.readdirSync(dirPath);

  files.forEach(function (file) {
    const filePath = path.resolve(dirPath, file);

    const fileStats: FileStat = { type: "file", file, path: filePath };

    if (fs.statSync(filePath).isDirectory()) {
      fileStats.type = "dir";
      fileStats.files = [];
      arrayOfFiles.push(fileStats);

      return listdir(filePath, fileStats.files);
    } else {
      arrayOfFiles.push(fileStats);
    }
  });

  return arrayOfFiles;
}
