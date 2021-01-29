import { ContextService } from "workbench/app/core/services";

function install(context: ContextService) {
  // const element = document.createElement("workbench-menu");
  // el.appendChild(element);
  // context.registPlugin(WorkbenchMenuPlugin.name, WorkbenchMenuPlugin.contributes)
  // context
  //   .loadModule(WorkbenchMenuPlugin.name, () => {
  //     return import("./src/module").then((m) => m.WorkbenchMenuPluginModule);
  //   })
  //   .then((data) => {
  //     context.triggerRender(WorkbenchMenuPlugin.name);
  //   });
}

export const WorkbenchMenuPlugin = {
  name: "workbench-menu-plugin",
  displayName: "工作区菜单",
  contributes: "workbenchMenu",
  install,
};

export { WorkbenchMenuComponent } from "./src/workbench-menu/workbench-menu.component";
export { WorkbenchMenuPluginModule } from "./src/module";
