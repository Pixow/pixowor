import * as path from "path";
import { app } from "electron";
import { CodeApplication } from "./app";

export class CodeMain {
  main(): void {
    this.startup();
    console.log("app apth: ", app.getAppPath());
  }

  private async startup(): Promise<void> {
    // const [instantiationService] = this.createServices();
    this.createServices();

    try {
      const app = new CodeApplication();
      app.startup();
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
