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
  const env = process.env.NODE_ENV;
  const userDataPath = path.join(app.getPath("userData"));
  const pathRuntime = path.join(userDataPath, "runtime");
  const pluginsDir = path.join(userDataPath, "plugins");
  const i18Dir = path.join(userDataPath, "i18n");

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
        fsa.ensureFileSync(_path);
        if (exec) exec();
      }
    }
  };

  [
    { _path: pathRuntime, isDir: true },
    { _path: pluginsDir, isDir: true },
    { _path: i18Dir, isDir: true },
    { _path: path.join(pathRuntime, "view-conf.json"), isDir: false },
    {
      _path: path.join(pluginsDir, "plugin-conf.json"),
      isDir: false,
      exec: function () {
        fsa.writeJsonSync(path.join(pluginsDir, "plugin-conf.json"), []);
      },
    },
    {
      _path: path.join(i18Dir, "zh-CN.json"),
      isDir: false,
      exec: function () {
        fsa.writeJsonSync(path.join(i18Dir, "zh-CN.json"), { login: "登录" });
      },
    },
    {
      _path: path.join(i18Dir, "en.json"),
      isDir: false,
      exec: function () {
        fsa.writeJsonSync(path.join(i18Dir, "en.json"), { login: "Login" });
      },
    },
    { _path: path.join(pathRuntime, "error.log"), isDir: false },
    {
      _path: path.join(pathRuntime, "settings.json"),
      isDir: false,
      exec: function () {
        console.log("------------------init settings--------------------");
        console.log({
          lang: "zh-CN",
          APP_PATH: app.getAppPath(),
          APP_DATA_PATH: app.getPath("appData"),
          USER_DATA_PATH: app.getPath("userData"),
          TEMP_PATH: app.getPath("temp"),
        });

        fsa.writeJsonSync(path.join(pathRuntime, "settings.json"), {
          lang: "zh-CN",
          APP_PATH: app.getAppPath(),
          APP_DATA_PATH: app.getPath("appData"),
          USER_DATA_PATH: app.getPath("userData"),
          TEMP_PATH: app.getPath("temp"),
        });
      },
    },
  ].forEach((info) => {
    check(info);
  });

  return {
    pathRuntime,
  };
}
