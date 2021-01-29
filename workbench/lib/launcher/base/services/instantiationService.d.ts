export interface ServiceIdentifier<T> {
    type: T;
}
export interface IInstantiationService {
    createInstance<T>(): void;
    invokeFunction(): void;
}
export declare class InstantiationService implements IInstantiationService {
    createInstance(): void;
    invokeFunction(): void;
}
