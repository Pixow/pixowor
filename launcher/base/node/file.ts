import * as fs from "fs"

export function readAFile ({path: filePath, cb}) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (!err) {
    cb(data)
        }
    })    
}