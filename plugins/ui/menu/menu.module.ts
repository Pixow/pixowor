import { CommonModule } from "@angular/common";
import { ComponentFactory, ComponentFactoryResolver, NgModule } from "@angular/core";
import { MenubarModule } from "primeng/menubar";

import { MenuComponent } from "./menu.component";

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, MenubarModule],
})
export class MenuModule {}
