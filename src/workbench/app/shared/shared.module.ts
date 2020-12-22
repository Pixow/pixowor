import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PageNotFoundComponent } from "./components/";
import { AppPasswordDirective, SubmitMaskDirective, WebviewDirective } from "./directives/";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CheckboxModule } from "primeng/checkbox";
import { CarouselModule } from "primeng/carousel";
import { ProgressBarModule } from "primeng/progressbar";

const DIRECTIVES = [WebviewDirective, AppPasswordDirective, SubmitMaskDirective];

const COMMONMODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const PRIMENGMODULES = [CheckboxModule, CarouselModule, ProgressBarModule];

@NgModule({
  declarations: [PageNotFoundComponent, ...DIRECTIVES],
  imports: [CommonModule, FormsModule],
  exports: [...DIRECTIVES, ...COMMONMODULES, ...PRIMENGMODULES],
})
export class SharedModule {}
