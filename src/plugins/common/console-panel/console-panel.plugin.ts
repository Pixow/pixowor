import { QingCore, Plugin } from "qing-core";

export class ConsolePanelPlugin extends Plugin {
  name = "ConsolePanel";
  version = "1.0.0";
  description = "控制台";

  getDependencies(): string[] {
    return [];
  }

  activate(): void {}

  deactivate(): void {}
}
