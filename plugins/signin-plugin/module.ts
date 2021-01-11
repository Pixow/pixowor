import { CommonModule } from "@angular/common";
import { Injector, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CarouselModule } from "primeng/carousel";
import { ProgressBarModule } from "primeng/progressbar";
import { CheckboxModule } from "primeng/checkbox";

import { SigninComponent } from "./src/signin/signin.component";
import { createCustomElement } from "@angular/elements";

@NgModule({
  declarations: [SigninComponent],
  imports: [CommonModule, CarouselModule, FormsModule, ReactiveFormsModule, ProgressBarModule, CheckboxModule],
  exports: [SigninComponent],
  entryComponents: [SigninComponent],
})
export class SigninPluginModule {
  constructor(injector: Injector) {
    const SigninElement = createCustomElement(SigninComponent, { injector });
    customElements.define("sign-in", SigninElement);
  }
}
