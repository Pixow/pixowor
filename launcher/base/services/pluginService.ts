import * as url from "url";
import * as path from "path";
import { ipcMain } from "electron";
import { CodeWindow } from "launcher/code/window";
const Client = require("electron-rpc/client");

export interface IPluginService {
  registPlugin(name: string): void;
}

type PluginInstance = "";
export class PluginService implements IPluginService {
  private _plugins = {};

  constructor() {
    ["game-editor", "element-editor"].forEach((name) => this.registPlugin(name));
  }

  public registPlugin(name: string) {
    const entry = url.format({
      pathname: path.join(__dirname, `../../plugins/${name}/index.html`),
      protocol: "file:",
      slashes: true,
    });

    this._plugins[name] = entry;

    ipcMain.on(`open-${name}`, () => {
      const pluginWindow = new CodeWindow({
        entry,
      });

      (pluginWindow as any).client = new Client();
    });
  }
}
