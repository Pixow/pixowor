import { ContextService } from "workbench/app/core/services";
import { LuapackageExplorerComponent } from "./src/luapackage-explorer/luapackage-explorer.component";

function install(context: ContextService) {
  // const element = document.createElement("market-explorer");
  // block.container.appendChild(element);
}

export const LuapackageExplorerPlugin = {
  name: "luapackage-explorer-plugin",
  displayName: "集市",
  contributes: {
    workbenchActivitybar: [
      {
        id: "luapackageExplorer",
        title: "公共库",
        icon: "qing qing-function",
      },
    ],
    workbenchExplorer: [
      {
        title: "公共库",
      },
    ],
  },
  install,
};

export { LuapackageExplorerPluginModule } from "./module";
export { LuapackageExplorerComponent } from "./src/luapackage-explorer/luapackage-explorer.component";
