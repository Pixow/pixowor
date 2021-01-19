import { CommonModule } from "@angular/common";
import { InjectionToken, ModuleWithProviders, NgModule, Provider } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ContextService } from "./core/services";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [],
  exports: [],
})
export class ContextModule {
  static forRoot(): ModuleWithProviders<ContextModule> {
    return {
      ngModule: ContextModule,
      providers: [ContextService],
    };
  }
}
