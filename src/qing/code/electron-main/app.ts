import { app } from "electron";
import { CodeWindow } from "./window";

export class CodeApplication {
  constructor() {}

  startup() {
    const codeWin = new CodeWindow({
      width: 500,
      height: 300,
      x: 100,
      y: 200,
    });
  }
}
