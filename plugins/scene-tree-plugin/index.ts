import { Plugin } from "glue/core/plugin";
import { Puzzle, PuzzleBlock } from "glue/puzzle";

function install(puzzle: PuzzleBlock) {
  puzzle.on(this.renderTrigger, ({ el }) => {
    const element = document.createElement("scene-tree");

    el.appendChild(element);
  });
}

export const SceneTreePlugin: Plugin = {
  name: "scene-tree-plugin",
  displayName: "场景节点树",
  renderTrigger: "render-scene-tree",
  contributes: "workbenchExtensions",
  install,
};

export { TreeComponent } from "./src/scene-tree/scene-tree.component";
export { SceneTreePluginModule } from "./module";
