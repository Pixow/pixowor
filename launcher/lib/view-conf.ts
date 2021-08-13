import { app } from "electron";
import * as path from "path";
import * as fsa from "fs-extra";

export interface IViewConf {
  width: number;
  height: number;
}

export default class ViewConf {
  private _confPath = path.resolve(app.getAppPath(), "app/runtime/view.conf");
  private _viewConf: IViewConf = {
    width: null,
    height: null,
  };

  public setConf(conf: IViewConf) {
    this._viewConf = Object.assign(this._viewConf, conf);
  }

  /**
   * [write 从内存中读取数值并写入view.conf]
   */
  public write() {
    return new Promise((resolve, reject) => {
      try {
        fsa.writeJson(this._confPath, this._viewConf, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve("");
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  public writeSync() {
    fsa.writeJsonSync(this._confPath, this._viewConf);
  }

  /**
   * [read 从view.conf读取配置]
   * @returns {result, error}
   */
  public read() {
    let result, error;
    try {
      result = fsa.readJsonSync(this._confPath, {
        encoding: "utf8",
      });
      error = null;
    } catch (e) {
      error = e;
      result = null;
    }

    return {
      result,
      error,
    };
  }
}
