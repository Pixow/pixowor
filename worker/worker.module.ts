import { ipcRenderer } from "electron";
import * as fs from "fs";
import * as path from "path";
import { Component, NgModule, OnInit } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { GameConfig, SceneConfig } from "../workbench/app/models/game-config";
import { IConfigObject } from "game-capsule";

@Component({
  selector: "worker-root",
  template: "<ng-container></ng-container>",
})
export class WorkerComponent implements OnInit {
  public gameConfig: GameConfig = null;

  public sceneConfigMap = new Map();
  public customNodeConfig = null;
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
        this.gameConfig.generateGameTree();

        message2UI("launch-game-back", { gameConfig: this.gameConfig });

        // fs.readFile(path.join(gameFolder, "custom-node.config.json"), "utf8", (err, data) => {
        //   this.customNodeConfig = JSON.parse(data);
        // });
      });
    });

    ipcRenderer.on("launch-scene", (event, arg) => {
      const { gameFolder, sceneId } = arg;

      if (this.sceneConfigMap.get(sceneId)) {
        message2UI("launch-scene-back", { sceneConfig: this.sceneConfigMap.get(sceneId) });
      }

      const sceneConfig = new SceneConfig(gameFolder, sceneId);

      fs.readFile(sceneConfig.scenePiFile, (err, buffer) => {
        if (err) {
          console.log(err);
        }

        sceneConfig.deserialize(buffer);
        sceneConfig.generateSceneTree();

        this.sceneConfigMap.set(sceneId, sceneConfig);

        message2UI("launch-scene-back", { sceneConfig: sceneConfig });
      });
    });

    ipcRenderer.on("generate-scene-tree", (event, arg) => {
      const { sceneId } = arg;
      const sceneConfig = this.sceneConfigMap.get(sceneId);
      const sceneTree = this.generateTree(sceneConfig);

      message2UI("generate-scene-tree-back", { sceneTree });
    });

    ipcRenderer.on("command-scene", (event, arg) => {
      this.lockFile = true;

      const { sceneId, command, args } = arg;

      const sceneConfig = this.sceneConfigMap.get(sceneId);

      sceneConfig.doCommand(command, args);
    });

    ipcRenderer.on("save-scene", (event, arg) => {
      if (this.lockFile) {
        return;
      }

      const { sceneId } = arg;

      const sceneConfig = this.sceneConfigMap.get(sceneId);

      const sceneBuffer = sceneConfig.serialize();

      fs.writeFile(sceneConfig.scenePiFile, sceneBuffer, (error) => {
        if (error) {
          console.log(error);
        }
      });
    });

    ipcRenderer.on("exist-game", (event, arg) => {
      this.gameConfig = null;
      this.sceneConfigMap.clear();
    });
  }

  generateTree(config: IConfigObject) {
    console.log("generate config tree: ", config);
  }
}

@NgModule({
  declarations: [WorkerComponent],
  imports: [BrowserModule],
  bootstrap: [WorkerComponent],
})
export class WorkerModule {}
