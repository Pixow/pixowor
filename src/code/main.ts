import { app } from "electron";
import { CodeApplication } from "./app";
// import { IInstantiationService } from "qing/base/services/instantiationService";

export class CodeMain {
  main(): void {
    this.startup();
  }

  private async startup(): Promise<void> {
    // const [instantiationService] = this.createServices();

    try {
      const app = new CodeApplication();
      app.startup();
    } catch (error) {
      // instantiationService.invokeFunction(this.quit, error)
    }
  }

  // private createServices(): [IInstantiationService] {

  // }

  private quit(reason?: Error): void {
    if (reason) {
    }
  }
}
