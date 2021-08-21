{
  const { app } = require("electron");
  const path = require("path");
  const fs = require("fs");

  const { EreMessageChannel } = require("electron-re");
  const { listDir } = require(path.join(app.getAppPath(), "dist/launcher/utils/list-dir.js"));
  const { Channels } = require(path.join(app.getAppPath(), "dist/launcher/config/ipc_channel.js"));

  const msgc = EreMessageChannel;

  msgc.on("test", (event, args) => {
    console.log("app service: ", event, args);
    msgc.sendTo(event.senderId, "test_replay", { value: 1 });
  });

  msgc.handle("read-file", (event, args) => {
    const { path, options } = args;
    const data = fs.readFileSync(path, options);

    return { error: null, data };
  });

  msgc.handle(Channels.READ_DIR, (event, args) => {
    const { dir } = args;

    const files = listDir(dir);

    return { error: null, data: files };
  });
}
