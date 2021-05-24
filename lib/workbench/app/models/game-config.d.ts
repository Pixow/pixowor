import { Capsule } from "game-capsule";
import { TreeNode } from "primeng/api";
import { Game } from "./game";
export interface SceneForm {
    name: string;
    rows: number;
    cols: number;
}
export declare class GameConfig {
    private _capsule;
    private _game;
    get capsule(): Capsule;
    get gameId(): string;
    get gameFolder(): string;
    get piFilePath(): string;
    get packageFilePath(): string;
    constructor(game: Game);
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
    private _game;
    private _config;
    tree: TreeLeaf[];
    constructor(game: Game);
    get sceneNode(): import("game-capsule").GameNode;
    deserialize(buffer: Uint8Array): void;
    serialize(): Uint8Array;
    generateSceneTree(): void;
    doCommand(command: string, args: any): void;
    addElement(): void;
    addTerrain(): void;
}
