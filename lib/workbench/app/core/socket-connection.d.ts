import { PacketHandler, PBpacket } from "net-socket-packet";
export interface ISocketConnection {
    send(packet: PBpacket): any;
    addPacketListener(handler: PacketHandler): void;
    removePacketListener(handler: PacketHandler): void;
}
export declare class SocketConnection implements EventTarget, ISocketConnection {
    private static mInstance;
    private mPakcetHandler;
    private mDelegate;
    constructor();
    static getInstance(): SocketConnection;
    addEventListener(...args: any[]): void;
    dispatchEvent(...args: any[]): boolean;
    removeEventListener(...args: any[]): void;
    addPacketListener(handler: PacketHandler): void;
    removePacketListener(handler: PacketHandler): void;
    startConnect(addr: any): void;
    closeConnect(): void;
    onData(data: any): void;
    send(data: any): void;
    destory(): void;
    get delegate(): DocumentFragment;
    get handlers(): PacketHandler[];
}
