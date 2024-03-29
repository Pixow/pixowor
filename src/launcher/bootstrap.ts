import * as url from "url";
import * as path from "path";
import { Container } from "typedi";
import { app, protocol } from "electron";
import WindowService, { WindowConfigFunction, WindowDefinition } from "./services/main/windows";

export function getWindowDefinition(
  serve: boolean,
  name: string,
  port: number,
  options: Electron.BrowserWindowConstructorOptions = {},
  menubarVisibility: boolean,
  setup?: WindowConfigFunction,
  onClosed?: WindowConfigFunction
): WindowDefinition {
  let entry: string;

  if (serve) {
    entry = `http://localhost:${port}`;
  } else {
    entry = url.format({
      pathname: path.resolve(app.getAppPath(), "dist", `${name}/index.html`),
      protocol: "file:",
      slashes: true,
    });
  }

  const windowDefinition: WindowDefinition = {
    name,
    config: {
      url: entry,
      options,
      menubarVisibility,
      ...(setup && { setup }),
      ...(onClosed && { onClosed }),
    },
  };

  return windowDefinition;
}

export default function Startup() {
  const args = process.argv.slice(1),
    serve = args.some((val) => val === "--serve");

  const windowService = Container.get(WindowService);

  const { width, height } = windowService.getViewConf();
  const workbenchOptions: Electron.BrowserWindowConstructorOptions = {
    width,
    height,
    show: true,
    center: true,
    minWidth: 1400,
    minHeight: 900,
    autoHideMenuBar: true,
    icon: path.join(app.getAppPath(), "resources/icon.png"),
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true,
      enableRemoteModule: true,
      affinity: "",
      webviewTag: true,
    },
  };

  const workbenchWindowDefinition = getWindowDefinition(
    serve,
    "workbench",
    4301,
    workbenchOptions,
    true,
    (window: Electron.BrowserWindow) => {
      console.log("run window setup");
      if (serve) {
        window.webContents.openDevTools();
      }
    }
  );

  protocol.interceptFileProtocol("file", (req, callback) => {
    const url = req.url.substr(8);
    callback(decodeURI(url));
  });

  // TODO:  先打开游戏管理面板，通过该面板打开编辑器主体
  windowService.processWindows([workbenchWindowDefinition]);
  windowService.openWindow({ windowName: "workbench" });
}
