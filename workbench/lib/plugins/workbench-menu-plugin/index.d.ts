import { ContextService } from "workbench/app/core/services";
declare function install(context: ContextService): void;
export declare const WorkbenchMenuPlugin: {
    name: string;
    displayName: string;
    contributes: string;
    install: typeof install;
};
export { WorkbenchMenuComponent } from "./src/workbench-menu/workbench-menu.component";
export { WorkbenchMenuPluginModule } from "./src/module";
