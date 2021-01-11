import { createCustomElement } from "@angular/elements";
import { CommonModule } from "@angular/common";
import { TreeComponent } from "./src/scene-tree/scene-tree.component";
import { Injector, NgModule } from "@angular/core";

@NgModule({
  declarations: [TreeComponent],
  imports: [CommonModule],
  exports: [TreeComponent],
  entryComponents: [TreeComponent],
})
export class SceneTreePluginModule {
  constructor(injector: Injector) {
    const TreeElement = createCustomElement(TreeComponent, { injector });
    customElements.define("scene-tree", TreeElement);
  }
}
