import { PacketHandler, PBpacket } from "net-socket-packet";
import { op_client, op_virtual_world, op_editor, op_galaxy } from "pixelpai_proto";

PBpacket.addProtocol(op_client);
PBpacket.addProtocol(op_virtual_world);
PBpacket.addProtocol(op_editor);
PBpacket.addProtocol(op_galaxy);

export interface ISocketConnection {
  send(packet: PBpacket);
  addPacketListener(handler: PacketHandler): void;
  removePacketListener(handler: PacketHandler): void;
}

export class SocketConnection implements EventTarget, ISocketConnection {
  private static mInstance: SocketConnection = new SocketConnection();
  private mPakcetHandler: PacketHandler[] = [];
  private mDelegate: DocumentFragment;
  // private delegate = document.createDocumentFragment();

  constructor() {
    // super();
    if (SocketConnection.mInstance) {
      throw new Error(
        `Error: Instantiation failed: Use ${this.constructor.name}.getInstance() instead of new.`
      );
    }
    SocketConnection.mInstance = this;
  }

  public static getInstance(): SocketConnection {
    return SocketConnection.mInstance;
  }

  public addEventListener(...args: any[]): void {
    this.delegate.addEventListener.apply(this.delegate, args);
  }

  public dispatchEvent(...args: any[]): boolean {
    return this.delegate.dispatchEvent.apply(this.delegate, args);
  }

  public removeEventListener(...args: any[]): void {
    return this.delegate.removeEventListener.apply(this.delegate, args);
  }

  addPacketListener(handler: PacketHandler) {
    this.mPakcetHandler.push(handler);
  }

  removePacketListener(handler: PacketHandler) {
    const index = this.mPakcetHandler.indexOf(handler);
    if (index > -1) {
      this.mPakcetHandler.splice(index, 1);
    }
  }

  startConnect(addr) {}

  closeConnect() {}

  onData(data: any) {
    const handlers = SocketConnection.mInstance.handlers;
    handlers.forEach((handler: PacketHandler) => {
      handler.onPacketArrived(data);
    });
  }

  send(data: any) {
    const packet: PBpacket = data;
    this.dispatchEvent(new CustomEvent("receivePacket", { detail: packet }));
  }

  destory() {
    this.mDelegate = null;
  }

  get delegate() {
    if (!this.mDelegate) {
      this.mDelegate = document.createDocumentFragment();
    }
    return this.mDelegate;
  }

  get handlers(): PacketHandler[] {
    return this.mPakcetHandler;
  }
}
