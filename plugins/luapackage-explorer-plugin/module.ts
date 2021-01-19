import { CommonModule } from "@angular/common";
import { Injector, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CarouselModule } from "primeng/carousel";
import { ProgressBarModule } from "primeng/progressbar";
import { CheckboxModule } from "primeng/checkbox";

import { LuapackageExplorerComponent } from "./src/luapackage-explorer/luapackage-explorer.component";
import { createCustomElement } from "@angular/elements";

@NgModule({
  declarations: [LuapackageExplorerComponent],
  imports: [CommonModule, CarouselModule, FormsModule, ReactiveFormsModule, ProgressBarModule, CheckboxModule],
  exports: [LuapackageExplorerComponent],
  entryComponents: [LuapackageExplorerComponent],
})
export class LuapackageExplorerPluginModule {
  constructor(injector: Injector) {
    const element = createCustomElement(LuapackageExplorerComponent, { injector });
    customElements.define("luapackage-explorer", element);
  }
}
