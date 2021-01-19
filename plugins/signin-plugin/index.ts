import { Injector } from "@angular/core";
import { CONTEXT_TOKEN_NAME, IContextService, IPlugin } from "@qing/types";

export const tokens = new Map();

function install(context: IContextService) {
  // const element = document.createElement("workbench-menu");
  // el.appendChild(element);
  // context.registEvent("openSignin")

  context.loadModule(SigninPlugin.name, () => {
    return import("./src/module").then((m) => m.SigninPluginModule);
  });
}

export function getContext(injector: Injector) {
  return injector.get<IContextService>(tokens.get(CONTEXT_TOKEN_NAME));
}

export const SigninPlugin: IPlugin = {
  name: "signin-plugin",
  displayName: "登录",
  install,
};

export { SigninPluginModule } from "./src/module";
export { SigninComponent } from "./src/signin/signin.component";
