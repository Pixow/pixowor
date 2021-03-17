import { Capsule, SceneNode } from "game-capsule";
import * as path from "path";
import { TreeNode } from "primeng/api";

export interface SceneForm {
  name: string;
  rows: number;
  cols: number;
}

export class GameConfig {
  private _capsule: Capsule;
  private _gameId: string;
  private _gameFolder: string;

  public get capsule() {
    return this._capsule;
  }

  public get gameId() {
    return this._gameId;
  }

  public get gameFolder() {
    return this._gameFolder;
  }

  public get piFilePath() {
    return path.join(this._gameFolder, `${this._gameId}.pi`);
  }

  public get packageFilePath() {
    return path.join(this._gameFolder, "package.json");
  }

  constructor(gameFolder: string, gameId: string) {
    this._capsule = new Capsule();
    this._gameFolder = gameFolder;
    this._gameId = gameId;
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
  private _gameFolder: string;
  private _sceneId: number;
  private _config: Capsule;
  public tree: TreeLeaf[];

  constructor(gameFolder: string, sceneId: number) {
    this._gameFolder = gameFolder;
    this._sceneId = sceneId;
    this._config = new Capsule();
  }

  public get scenePiFile() {
    return path.join(this._gameFolder, `${this._sceneId}.pi`);
  }

  public get sceneNode() {
    return this._config.root;
  }

  deserialize(buffer: Uint8Array) {
    this._config.deserialize(buffer);
  }

  serialize() {
    return this._config.serialize();
  }

  generateSceneTree() {
    console.log("scene config: ", this._config);
    function walk(node) {
      let tree = [];
      let leaf: TreeLeaf = {
        label: node.name,
        name: node.name,
        id: node.id,
        sn: node.sn,
        expanded: true,
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

    this.tree = walk(this._config.root);
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