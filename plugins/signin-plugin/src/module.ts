import { CommonModule } from "@angular/common";
import { Injector, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CarouselModule } from "primeng/carousel";
import { ProgressBarModule } from "primeng/progressbar";
import { CheckboxModule } from "primeng/checkbox";

import { SigninComponent } from "./signin/signin.component";
import { createCustomElement } from "@angular/elements";
import { NgxsModule } from "@ngxs/store";
import { AuthState } from "./store/auth.state";

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressBarModule,
    CheckboxModule,
    NgxsModule.forFeature([AuthState]),
  ],
  exports: [SigninComponent],
  entryComponents: [SigninComponent],
})
export class SigninPluginModule {
  componentType = SigninComponent;
  // constructor(injector: Injector) {
  //   const SigninElement = createCustomElement(SigninComponent, { injector });
  //   customElements.define("sign-in", SigninElement);
  // }
}
