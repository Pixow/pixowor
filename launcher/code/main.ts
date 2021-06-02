import * as path from "path";
import { app } from "electron";
import { CodeApplication } from "./app";
import { startPluginHostProcess } from "./plugin-process";

export class CodeMain {
  main(): void {
    this.startup();
  }

  private async startup(): Promise<void> {
    // const [instantiationService] = this.createServices();
    this.createServices();

    try {
      const app = new CodeApplication();
      app.startup();

      startPluginHostProcess();
    } catch (error) {
      // instantiationService.invokeFunction(this.quit, error)
    }
  }

  private createServices() {}

  private quit(reason?: Error): void {
    if (reason) {
    }
  }
}
