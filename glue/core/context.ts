import * as path from "path";
import { Emitter } from "./emitter";
import { Plugin, PluginParams } from "./plugin";

export abstract class Context extends Emitter {
  id: string;
  plugins: Map<string, any>;

  protected constructor(id: string) {
    super();
    this.id = id;
    this.plugins = new Map();
  }

  use<T extends Plugin, O extends PluginParams<T>>(plugin: Plugin, options?: O) {
    if (plugin.name && this.plugins.has(plugin.name)) {
      throw new Error(`Plugin ${plugin.name} already in use`);
    }

    // const contributes = require(path.join(__dirname, `plugins/${plugin.name}/package.json`)).contributes;
    // console.log("🚀 ~ file: context.ts ~ line 20 ~ Context ~ contributes", contributes);

    plugin.install(this, options || {});
    this.plugins.set(plugin.name, Object.assign(options || {}, { renderTrigger: plugin.renderTrigger }));
  }
}
