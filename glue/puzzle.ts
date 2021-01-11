import { Context } from "./core/context";
import { PuzzleView } from "./view/puzzle-view";

export class Puzzle {
  blocks: Map<string, PuzzleBlock> = new Map();

  constructor() {}

  registPuzzleBlock(block: PuzzleBlock) {
    if (!this.blocks.has(block.id)) {
      this.blocks.set(block.id, block);
    }
  }

  getPuzzleBlock(id: string) {
    return this.blocks.get(id);
  }
}

export class PuzzleBlock extends Context {
  id: string;
  container: HTMLElement;

  constructor(id: string, container: HTMLElement) {
    super(id);
    this.id = id;
    this.container = container;
  }

  triggerPluginRender(renderTrigger: string) {
    this.trigger(renderTrigger, {
      el: this.container,
    });
  }
}
