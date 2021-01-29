import { IPlugin } from "workbench/puzzle";
import { ContextService } from "workbench/app/core/services";

function install(context: ContextService) {
  // const element = document.createElement("market-explorer");
  // block.container.appendChild(element);
  // 注册全局context服务
  // const WorkbenchContext = new InjectionToken<ContextService>("WorkbenchContext", {
  //   providedIn: "root",
  //   factory: () => context,
  // });
  // tokens.set("WorkbenchContext", WorkbenchContext);
  // context.loadModule("marketExplorer", () => {
  //   return import("./src/module").then((m) => m.MarketExplorerPluginModule);
  // });
}

export const MarketExplorerPlugin: IPlugin = {
  name: "market-explorer-plugin",
  displayName: "集市",
  contributes: {
    workbenchActivitybar: [
      {
        id: "marketExplorer",
        title: "集市",
        icon: "qing qing-market",
      },
    ],
  },
  install,
};

export { MarketExplorerPluginModule } from "./src/module";
export { MarketExplorerComponent } from "./src/market-explorer/market-explorer.component";
