import { Injector } from "@angular/core";

export const tokens = new Map();

function install(context) {
  // const element = document.createElement("workbench-menu");
  // el.appendChild(element);
  // context.registEvent("openSignin")
  // context.loadModule(SigninPlugin.name, () => {
  //   return import("./src/module").then((m) => m.SigninPluginModule);
  // });
}

export const SigninPlugin = {
  name: "signin-plugin",
  displayName: "登录",
  install,
};

export { SigninPluginModule } from "./src/module";
export { SigninComponent } from "./src/signin/signin.component";
