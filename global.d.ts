declare namespace System {}

declare module NodeJS {
  interface Global {
    nodeEnv: string;
    ipcMainProcess: any;
  }
}
