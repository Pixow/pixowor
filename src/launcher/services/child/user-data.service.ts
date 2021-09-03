const http = require("http");
const path = require("path");
const fs = require("fs");

const userDataServicePort = 45326;

http
  .createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
    res.setHeader("Access-Control-Max-Age", 2592000); // 30 days

    fs.readFile(path.join(process.argv[2], req.url), function (err, data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200);

      res.end(data);
    });
  })
  .listen(userDataServicePort);
