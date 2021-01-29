import { ContextService } from "workbench/app/core/services";
declare function install(context: ContextService): void;
export declare const LuapackageExplorerPlugin: {
    name: string;
    displayName: string;
    contributes: {
        workbenchActivitybar: {
            id: string;
            title: string;
            icon: string;
        }[];
        workbenchExplorer: {
            title: string;
        }[];
    };
    install: typeof install;
};
export { LuapackageExplorerPluginModule } from "./module";
export { LuapackageExplorerComponent } from "./src/luapackage-explorer/luapackage-explorer.component";
