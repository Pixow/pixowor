import "module-alias/register";
import { app } from "electron";
import { CodeMain } from "@qing/code/electron-main/main";

app.once("ready", () => {
  onReady();
});

function onReady() {
  const code = new CodeMain();
  code.main();
}
