import { IContextService } from "workbench/app/core/services";
export declare const tokens: Map<any, any>;
declare function install(context: IContextService): void;
export declare const SigninPlugin: {
    name: string;
    displayName: string;
    install: typeof install;
};
export { SigninPluginModule } from "./src/module";
export { SigninComponent } from "./src/signin/signin.component";
