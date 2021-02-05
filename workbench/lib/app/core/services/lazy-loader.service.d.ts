import { Compiler, Injector } from "@angular/core";
export declare class LazyLoaderService {
    private compiler;
    private injector;
    constructor(compiler: Compiler, injector: Injector);
    loadModule(path: any): void;
}
