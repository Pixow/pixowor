export declare class EventBus {
    events: any;
    constructor();
    on(type: string, listener: Function, isUnshift?: boolean): void;
    emit(type: any, ...args: any[]): void;
    once(type: any, listener: any): void;
    off(type: any, listener: any): void;
}
