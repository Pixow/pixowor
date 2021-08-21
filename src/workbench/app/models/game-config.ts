import { Capsule } from "game-capsule";
import * as path from "path";
import { Game } from "@workbench/app/models/game";

export interface SceneForm {
  name: string;
  rows: number;
  cols: number;
}

export class GameConfig {
  private _capsule: Capsule;
  private _game: Game;

  public get capsule() {
    return this._capsule;
  }

  public get gameId() {
    return this._game._id;
  }

  public get gameFolder() {
    return this._game.gameFolder;
  }

  public get piFilePath() {
    return path.join(this.gameFolder, `${this.gameId}.pi`);
  }

  public get packageFilePath() {
    return path.join(this.gameFolder, "package.json");
  }

  constructor(game: Game) {
    this._capsule = new Capsule();
    this._game = game;
  }

  serialize() {
    this._capsule.serialize();
  }

  deserialize(buffer: Uint8Array) {
    this._capsule.deserialize(buffer);
  }

  serializeScene(sceneId: number) {
    this._capsule.serializeScene(sceneId);
  }

  generateGameTree() {
    console.log("game capsule: ", this._capsule);
  }

  public addScene({ name, rows, cols }: SceneForm) {
    this._capsule.add.scene(rows, cols, name);
  }

  public getScene(sceneId: number) {
    return this._capsule;
  }
}
