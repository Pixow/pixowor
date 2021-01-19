function install() {
  // const element = document.createElement("scene-tree");
  // el.appendChild(element);
}

export const SceneTreePlugin = {
  name: "scene-tree-plugin",
  displayName: "场景节点树",
  contributes: "workbenchExtensions",
  install,
};

export { TreeComponent } from "./src/scene-tree/scene-tree.component";
export { SceneTreePluginModule } from "./module";
