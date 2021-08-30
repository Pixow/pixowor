import { QingCore, Plugin, RendererFunctions } from "qing-core";
import { SigninComponent } from "./signin.component";
export class SigninPlugin extends Plugin {
  name = "Signin";
  version = "1.0.0";
  description = "登录插件";

  constructor(private qingCore: QingCore) {
    super();
  }

  getDependencies(): string[] {
    return ["Dialog@1.0.0"];
  }

  activate(): void {
    this.qingCore.Invoke(RendererFunctions.REGIST_COMPONENT, "Signin", SigninComponent);

    const user = this.qingCore.Get("user");
    this.qingCore.RegistVariable(this.getPluginIdentify(), "user", user);

    // TODO: 注入menu 登录item
  }

  deactivate(): void {}
}
