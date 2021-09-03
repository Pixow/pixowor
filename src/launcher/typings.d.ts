declare namespace System {}

export interface CustomNodeJsGlobal extends NodeJS.Global {
  nodeEnv: string;
  pathRuntime: string;
  ipcMainProcess: any;
  userDataStaticServiceProcess: any;
}

declare global {
  namespace NodeJS {
    interface Global {
      nodeEnv: string;
      pathRuntime: string;
      ipcMainProcess: any;
      userDataStaticServiceProcess: any;
    }
  }
}
