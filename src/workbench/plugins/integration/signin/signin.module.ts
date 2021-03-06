import { CommonModule } from "@angular/common";
import { ComponentFactory, ComponentFactoryResolver, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CarouselModule } from "primeng/carousel";
import { CheckboxModule } from "primeng/checkbox";
import { ProgressBarModule } from "primeng/progressbar";
import { PixoworCore } from "pixowor-core";

import { SigninComponent } from "./signin.component";

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressBarModule,
    CarouselModule,
    CheckboxModule,
  ],
  providers: [PixoworCore],
})
export class SigninModule {}
