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
