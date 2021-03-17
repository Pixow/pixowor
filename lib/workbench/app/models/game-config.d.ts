import { Capsule } from "game-capsule";
import { TreeNode } from "primeng/api";
export interface SceneForm {
    name: string;
    rows: number;
    cols: number;
}
export declare class GameConfig {
    private _capsule;
    private _gameId;
    private _gameFolder;
    get capsule(): Capsule;
    get gameId(): string;
    get gameFolder(): string;
    get piFilePath(): string;
    get packageFilePath(): string;
    constructor(gameFolder: string, gameId: string);
    serialize(): void;
    deserialize(buffer: Uint8Array): void;
    serializeScene(sceneId: number): void;
    generateGameTree(): void;
    addScene({ name, rows, cols }: SceneForm): void;
    getScene(sceneId: number): Capsule;
}
export interface TreeLeaf extends TreeNode {
    name: string;
    id: number;
    sn: string;
    children?: TreeLeaf[];
}
export declare class SceneConfig {
    private _gameFolder;
    private _sceneId;
    private _config;
    tree: TreeLeaf[];
    constructor(gameFolder: string, sceneId: number);
    get scenePiFile(): string;
    get sceneNode(): import("game-capsule").GameNode;
    deserialize(buffer: Uint8Array): void;
    serialize(): Uint8Array;
    generateSceneTree(): void;
    doCommand(command: string, args: any): void;
    addElement(): void;
    addTerrain(): void;
}
