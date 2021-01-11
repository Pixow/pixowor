import { createCustomElement } from "@angular/elements";
import { CommonModule } from "@angular/common";
import { WorkbenchMenuComponent } from "./src/workbench-menu/workbench-menu.component";
import { Injector, NgModule } from "@angular/core";
import { MenubarModule } from "primeng/menubar";

@NgModule({
  declarations: [WorkbenchMenuComponent],
  imports: [CommonModule, MenubarModule],
  exports: [WorkbenchMenuComponent],
  entryComponents: [WorkbenchMenuComponent],
})
export class WorkbenchMenuPluginModule {
  constructor(injector: Injector) {
    const WorkbenchMenuElement = createCustomElement(WorkbenchMenuComponent, { injector });
    customElements.define("workbench-menu", WorkbenchMenuElement);
  }
}
