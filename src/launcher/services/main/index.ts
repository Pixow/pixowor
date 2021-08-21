import { notifySend, INotify } from "@launcher/utils/utils";
import { app } from "electron";
import * as path from "path";

export class IpcMainProcess {
  private ipc: Electron.IpcMain;

  constructor(ipc: Electron.IpcMain) {
    this.ipc = ipc;
  }

  notifySend(args: INotify) {
    const iconAddr = args.icon || "resources/icon.png";

    notifySend({
      delay: args.delay || 0,
      title: args.title || "electron",
      body: args.body || "electron notifycation",
      icon: path.join(app.getAppPath(), iconAddr),
    });
  }
}
