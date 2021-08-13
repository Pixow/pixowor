import * as url from "url";
import * as path from "path";
import { ipcMain } from "electron";
const Client = require("electron-rpc/client");

export interface IPluginService {}

export class PluginService implements IPluginService {
  constructor() {}
}
