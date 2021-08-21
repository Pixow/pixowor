import { app } from "electron";
import * as path from "path";
import * as fsa from "fs-extra";
import { Service } from "typedi";

export interface IViewConf {
  width: number;
  height: number;
}

@Service()
export default class ViewConf {
  private _confPath = path.join(global.pathRuntime, "view.conf");
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
    const data = JSON.stringify(this._viewConf);
    fsa.writeFileSync(this._confPath, data, "utf8");
  }

  /**
   * [read 从view.conf读取配置]
   * @returns {result, error}
   */
  public read(): { result: IViewConf; error: any | null } {
    let result, error;
    try {
      result = fsa.readFileSync(this._confPath, { encoding: "utf8" });
      result = JSON.parse(result);
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
