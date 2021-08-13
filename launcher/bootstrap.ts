import * as url from "url";
import * as path from "path";
import { Container } from "typedi";
import { app } from "electron";
import WindowService, { WindowConfigFunction, WindowDefinition } from "./services/main/windows";

export function getWindowDefinition(
  name: string,
  port: number,
  options: Electron.BrowserWindowConstructorOptions = {},
  setup?: WindowConfigFunction,
  onClosed?: WindowConfigFunction
): WindowDefinition {
  const args = process.argv.slice(1),
    serve = args.some((val) => val === "--serve");

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

  const browserWindowOptions: Electron.BrowserWindowConstructorOptions = Object.assign(
    {
      frame: true,
      resizable: false,
      show: true,
    },
    options
  );

  const windowDefinition: WindowDefinition = {
    name,
    config: {
      url: entry,
      options: browserWindowOptions,
      ...(setup && { setup }),
      ...(onClosed && { onClosed }),
    },
  };

  return windowDefinition;
}

export default function Startup() {
  const windowService = Container.get(WindowService);

  const workbenchWindowDefinition = getWindowDefinition(
    "workbench",
    4300,
    {
      webPreferences: {
        nodeIntegration: true,
      },
    },
    (window: Electron.BrowserWindow) => {
      windowService.openDevTools({ windowName: "workbench" });
    }
  );
  const workerWindowDefinition = getWindowDefinition("worker", 4301, { show: false });

  windowService.processWindows([workbenchWindowDefinition, workerWindowDefinition]);
  windowService.openWindow({ windowName: "workbench" });
}
