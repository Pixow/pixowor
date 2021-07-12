import * as fs from "fs";
import * as path from "path";

export function readAFile({ path: filePath, cb }) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (!err) {
      cb({ data });
    } else {
      cb({ error: err });
    }
  });
}

export function isFileExists(path) {
  return fs.existsSync(path);
}

export interface FileStat {
  type: string;
  file: string;
  path: string;
  files?: FileStat[]
}

export function getAllFiles (dirPath: string, arrayOfFiles: FileStat[] = []): FileStat[] {
  const files = fs.readdirSync(dirPath)

  
  files.forEach(function(file) {
    const fPath = path.resolve(dirPath, file)

    const fileStats: FileStat = {type: "file",file, path: fPath}

    if (fs.statSync(fPath).isDirectory()) {
      fileStats.type = "dir"
      fileStats.files = []
      arrayOfFiles.push(fileStats)

      return getAllFiles(fPath, fileStats.files)
    } else {
      arrayOfFiles.push(fileStats)
    }
  })

  return arrayOfFiles
}