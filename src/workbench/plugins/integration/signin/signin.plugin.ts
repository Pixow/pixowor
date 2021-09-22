import { Component, Type } from "@angular/core";
import { PixoworCore, Plugin } from "pixowor-core";
import { SigninComponent } from "./signin.component";
import manifest from "./manifest.json";
export class SigninPlugin extends Plugin {
  constructor(pixoworCore: PixoworCore) {
    super(pixoworCore, manifest);
  }

  activate(): void {
    this.colorLog(`${this.name} activate, Pid: ${this.pid}`);
    this.registerComponent("Signin", <Component>SigninComponent);
    const user = this.get("user");
    this.registerVariable("user", user);

    // TODO: 注入menu 登录item
  }

  deactivate(): void {
    this.unRrgisterComponent("Signin");
    this.unRegisterVariable("user");
  }
}
