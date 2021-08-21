import * as path from "path";
import * as http from "http";
import * as fs from "fs";
import { app, ipcMain } from "electron";

export function StartPluginService() {
  const userDataPath = app.getPath("userData");

  http
    .createServer(function (req, res) {
      fs.readFile(path.join(userDataPath, req.url), function (err, data) {
        if (err) {
          res.writeHead(404);
          res.end(JSON.stringify(err));
          return;
        }
        res.writeHead(200, {
          "Access-Control-Allow-Origin": "*",
        });

        res.end(data);
      });
    })
    .listen(45326);

  console.log(`Plugin host process bind port ${45326}`);
}
