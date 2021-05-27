import { CommonModule } from "@angular/common";
import { ComponentFactory, ComponentFactoryResolver, NgModule } from "@angular/core";
import { MenubarModule } from "primeng/menubar";

import { MenuComponent } from "./menu.component";

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, MenubarModule],
})
export class MenuModule {
  constructor(private resolver: ComponentFactoryResolver) {}

  public resolveComponentFactory(): ComponentFactory<MenuComponent> {
    return this.resolver.resolveComponentFactory(MenuComponent);
  }
}
