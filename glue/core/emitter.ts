import { Events } from "./events";

export class Emitter {
  events: { [key: string]: (args) => void | unknown } = {};

  constructor() {}

  on(name: string, handler: (args) => void | unknown) {
    this.events[name] = handler;
  }

  trigger(name, params = {}) {
    console.log(this.events[name]);
    this.events[name].call(this, params);
  }
}
