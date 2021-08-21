import * as fs from "fs";
import * as path from "path";

interface FileStat {
  type: string;
  file: string;
  path: string;
  files?: FileStat[];
}

export function listDir(dirPath: string, arrayOfFiles: FileStat[] = []): FileStat[] {
  const files = fs.readdirSync(dirPath);

  files.forEach(function (file) {
    const filePath = path.resolve(dirPath, file);

    const fileStats: FileStat = { type: "file", file, path: filePath };

    if (fs.statSync(filePath).isDirectory()) {
      fileStats.type = "dir";
      fileStats.files = [];
      arrayOfFiles.push(fileStats);

      return listDir(filePath, fileStats.files);
    } else {
      arrayOfFiles.push(fileStats);
    }
  });

  return arrayOfFiles;
}
