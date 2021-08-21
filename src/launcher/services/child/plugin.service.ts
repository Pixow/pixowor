{
  const path = require("path");
  const http = require("http");
  const fs = require("fs");
  const { app } = require("electron");
  const { ProcessHost } = require("electron-re");

  ProcessHost.registry("start-pluginservice", (params) => {
    console.log("ProcessHost start pluginservice");
    return startPluginService();
  });

  function startPluginService() {
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
}
