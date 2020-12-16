import "module-alias/register";

import * as url from "url";
import * as path from "path";
import { app, BrowserWindow } from "electron";
import { CodeMain } from "@qing/code/electron-main/main";

app.once("ready", () => {
  onReady();
});

function onReady() {
  // const code = new CodeMain();
  // code.main();
  createWindow();
}

let win: BrowserWindow = null;
function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: 500,
    height: 500,
    webPreferences: {
      nodeIntegration: true,
      allowRunningInsecureContent: false,
      contextIsolation: false, // false if you want to run 2e2 test with Spectron
      enableRemoteModule: true, // true if you want to run 2e2 test  with Spectron or use remote module in renderer context (ie. Angular)
    },
  });

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "auth/index.html"),
      protocol: "file:",
      slashes: true,
    })
  );

  // Emitted when the window is closed.
  win.on("closed", () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });

  return win;
}
