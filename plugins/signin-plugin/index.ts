import { Plugin } from "glue/core/plugin";
import { Puzzle, PuzzleBlock } from "glue/puzzle";

function install(puzzle: PuzzleBlock) {
  puzzle.on(this.renderTrigger, ({ el }) => {
    const element = document.createElement("workbench-menu");

    el.appendChild(element);
  });
}

export const SigninPlugin: Plugin = {
  name: "sign-in-plugin",
  displayName: "登录",
  renderTrigger: "render-sign-in",
  install,
};

export { SigninPluginModule } from "./module";
export { SigninComponent } from "./src/signin/signin.component";
