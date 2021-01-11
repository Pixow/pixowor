import { Plugin } from "glue/core/plugin";
import { Puzzle, PuzzleBlock } from "glue/puzzle";

function install(puzzle: PuzzleBlock) {
  puzzle.on(this.renderTrigger, ({ el }) => {
    const element = document.createElement("activity-bar");

    el.appendChild(element);
  });
}

export const ActivitybarPlugin: Plugin = {
  name: "activity-bar-plugin",
  displayName: "登录",
  renderTrigger: "render-activity-bar",
  contributes: "workbenchActivitybar",
  install,
};

export { ActivitybarPluginModule } from "./module";
export { ActivitybarComponent } from "./src/activitybar/activitybar.component";
