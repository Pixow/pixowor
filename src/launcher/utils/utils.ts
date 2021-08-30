import { app, Notification } from "electron";
import * as path from "path";
import * as fsa from "fs-extra";

export interface INotify {
  title: string;
  body: string;
  icon: string;
  delay: number;
}

export function notifySend({ title, body, icon, delay }: INotify) {
  const notify = new Notification({
    title,
    body,
    icon,
  });

  if (delay) {
    setTimeout(() => {
      notify.show();
    }, delay);
  } else {
    notify.show();
  }
}

/**
 * checkEnvFiles [检查环境文件是否存在]
 */
export function checkEnvFiles() {
  const appDataPath = path.join(app.getPath("appData"), "QingStudio");
  const pathRuntime = path.join(appDataPath, "runtime/");

  const check = function ({
    _path,
    isDir,
    exec,
  }: {
    _path: string;
    isDir: boolean;
    exec?: Function;
  }) {
    if (!fsa.existsSync(_path)) {
      if (isDir) {
        fsa.mkdirSync(_path);
        if (exec) exec();
      } else {
        fsa.closeSync(fsa.openSync(_path, "w"));
      }
    }
  };

  [
    { _path: appDataPath, isDir: true },
    { _path: pathRuntime, isDir: true },
    { _path: path.join(pathRuntime, "view-conf.json"), isDir: false },
    { _path: path.join(appDataPath, "plugins/plugin-conf.json"), isDir: false },
    { _path: path.join(pathRuntime, "error.log"), isDir: false },
  ].forEach((info) => {
    check(info);
  });

  return {
    pathRuntime,
  };
}