declare function install(): void;
export declare const SceneTreePlugin: {
    name: string;
    displayName: string;
    contributes: string;
    install: typeof install;
};
export { TreeComponent } from "./src/scene-tree/scene-tree.component";
export { SceneTreePluginModule } from "./module";
