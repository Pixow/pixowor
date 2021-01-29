export interface IPluginService {
    registPlugin(name: string): void;
}
export declare class PluginService implements IPluginService {
    private _plugins;
    constructor();
    registPlugin(name: string): void;
}
