const fs = require("fs"),
  http = require("http");

import * as path from "path";

const [, , appPath] = process.argv;

http
  .createServer(function (req, res) {
    fs.readFile(path.join(appPath, req.url), function (err, data) {
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

console.log("appPath: ", appPath);
console.log("Http listen 45326");
