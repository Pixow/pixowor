import { createCustomElement } from "@angular/elements";
import { CommonModule } from "@angular/common";
import { WorkbenchMenuComponent } from "./workbench-menu/workbench-menu.component";
import { Injector, NgModule } from "@angular/core";
import { MenubarModule } from "primeng/menubar";

@NgModule({
  declarations: [WorkbenchMenuComponent],
  imports: [CommonModule, MenubarModule],
  exports: [WorkbenchMenuComponent],
  entryComponents: [WorkbenchMenuComponent],
})
export class WorkbenchMenuPluginModule {
  componentType = WorkbenchMenuComponent;

  // constructor(injector: Injector) {
  //   const WorkbenchMenuElement = createCustomElement(WorkbenchMenuComponent, { injector });
  //   customElements.define("workbench-menu", WorkbenchMenuElement);
  // }
}
