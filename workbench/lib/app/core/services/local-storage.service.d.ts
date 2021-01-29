export declare class LocalStorageService {
    static instance: LocalStorageService;
    constructor();
    set(key: string, data: string | object): void;
    get(key: string): any;
    remove(key: string): void;
}
