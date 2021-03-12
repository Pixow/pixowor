import { ipcRenderer } from "electron";
import * as fs from "fs";
import { Component, NgModule, OnInit } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { GameConfig, SceneConfig } from "./game-config";

@Component({
  selector: "worker-root",
  template: "<ng-container></ng-container>",
})
export class WorkerComponent implements OnInit {
  public gameConfig: GameConfig = null;
  public sceneConfig: SceneConfig = null;
  public lockFile = false;

  constructor() {}

  ngOnInit() {
    const message2UI = (channel, payload) => {
      ipcRenderer.send(channel, {
        payload: payload,
      });
    };

    ipcRenderer.on("launch-game", (event, arg) => {
      console.log(
        "🚀 ~ file: worker.module.ts ~ line 28 ~ WorkerComponent ~ ipcRenderer.on ~ event, arg",
        event,
        arg
      );
      const { gameFolder, gameId } = arg;

      this.gameConfig = new GameConfig(gameFolder, gameId);

      fs.readFile(this.gameConfig.piFilePath, (err, buffer) => {
        if (err) {
          console.log(err);
        }

        this.gameConfig.deserialize(buffer);

        message2UI("launch-game-back", { gameConfig: this.gameConfig });
      });
    });

    ipcRenderer.on("launch-scene", (event, arg) => {
      const { gameFolder, sceneId } = arg;

      this.sceneConfig = new SceneConfig(gameFolder, sceneId);

      fs.readFile(this.sceneConfig.scenePiFile, (err, buffer) => {
        if (err) {
          console.log(err);
        }

        this.sceneConfig.deserialize(buffer);

        message2UI("launch-scene-back", { sceneConfig: this.sceneConfig });
      });
    });

    ipcRenderer.on("command-scene", (event, arg) => {
      this.lockFile = true;

      const { command, args } = arg;

      this.sceneConfig.doCommand(command, args);
    });

    ipcRenderer.on("save-scene", (event, arg) => {
      if (this.lockFile) {
        return;
      }

      const sceneBuffer = this.sceneConfig.serialize();

      fs.writeFile(this.sceneConfig.scenePiFile, sceneBuffer, (error) => {
        if (error) {
          console.log(error);
        }
      });
    });

    ipcRenderer.on("exist-game", (event, arg) => {
      this.gameConfig = null;
      this.sceneConfig = null;
    });
  }
}

@NgModule({
  declarations: [WorkerComponent],
  imports: [BrowserModule],
  bootstrap: [WorkerComponent],
})
export class WorkerModule {}
