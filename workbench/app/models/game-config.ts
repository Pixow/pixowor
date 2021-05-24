import { Capsule, SceneNode } from "game-capsule";
import * as path from "path";
import { BaseNodeTypes } from "workbench/consts";
import { TreeNode } from "primeng/api";
import { Game } from "workbench/app/models/game";

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

export interface TreeLeaf extends TreeNode {
  name: string;
  id: number;
  sn: string;
  children?: TreeLeaf[];
}

export class SceneConfig {
  private _game: Game;
  private _config: Capsule;
  public tree: TreeLeaf[];

  constructor(game: Game) {
    this._game = game;
    this._config = new Capsule();
  }

  public get sceneNode() {
    return this._config.root.children[0];
  }

  deserialize(buffer: Uint8Array) {
    this._config.deserialize(buffer);
  }

  serialize() {
    return this._config.serialize();
  }

  generateSceneTree() {
    console.log("scene config: ", this._config);
    const sceneId = this.sceneNode.id;
    function walk(node) {
      let tree = [];

      if (BaseNodeTypes.indexOf(node.type) >= 0) {
        return [];
      }

      let leaf: TreeLeaf = {
        label: node.name,
        name: node.name,
        id: node.id,
        sn: node.sn,
        expanded: node.id === sceneId ? true : false,
      };

      if (node.children !== undefined) {
        leaf.children = [];
        for (let child of node.children) {
          leaf.children.push(...walk(child));
        }
      }

      tree.push(leaf);

      return tree;
    }

    this.tree = walk(this._config.root.children[0]);
  }

  doCommand(command: string, args) {
    this[command](args);
  }

  public addElement() {
    const element = this._config.add.element();
    this._config.root.appendNode(element);
  }

  public addTerrain() {
    const terrain = this._config.add.terrain();
    this._config.root.appendNode(terrain);
  }
}
