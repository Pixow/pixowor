import * as fs from "fs";

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
