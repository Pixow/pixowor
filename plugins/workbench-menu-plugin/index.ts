import { Plugin } from "glue/core/plugin";
import { Puzzle, PuzzleBlock } from "glue/puzzle";

function install(puzzle: PuzzleBlock) {
  puzzle.on(this.renderTrigger, ({ el }) => {
    const element = document.createElement("workbench-menu");

    el.appendChild(element);
  });
}

export const WorkbenchMenuPlugin: Plugin = {
  name: "workbench-menu-plugin",
  displayName: "工作区菜单",
  renderTrigger: "render-workbench-menu",
  contributes: "workbenchMenu",
  install,
};

export { WorkbenchMenuComponent } from "./src/workbench-menu/workbench-menu.component";
export { WorkbenchMenuPluginModule } from "./module";
