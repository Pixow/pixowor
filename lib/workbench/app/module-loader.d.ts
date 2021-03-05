export declare class ModuleLoader {
    /**
     * Call this BEFORE calling load(url)
     */
    register(modules: {
        [name: string]: object;
    }): Promise<this>;
    load(url: string): Promise<any>;
    private getBaseUrl;
}
