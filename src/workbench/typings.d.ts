declare module "electron-re" {
  class MessageChannel {
    static send(name: string, channel: string, args: any): void;
    static invoke(name: string, channel: string, args: any): Promise<any>;
  }

  class ChildProcessPool {
    constructor({ path, max, cwd, env }: { path: string; max: number; cwd?: string; env: any });
  }

  class BrowserService {
    constructor(name: string, path: string, options: any);

    connected(): void;
    openDevTools(): void;
  }
  export { MessageChannel, ChildProcessPool, BrowserService };
}

interface ActiveXObject {
  new (s: string): any;
}
declare var ActiveXObject: ActiveXObject;
