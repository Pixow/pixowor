import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PageNotFoundComponent } from "./components/";
import { WebviewDirective } from "./directives/";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CheckboxModule } from "primeng/checkbox";
import { CarouselModule } from "primeng/carousel";

const COMMONMODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const PRIMENGMODULES = [CheckboxModule, CarouselModule];

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective],
  imports: [CommonModule, FormsModule],
  exports: [WebviewDirective, ...COMMONMODULES, ...PRIMENGMODULES],
})
export class SharedModule {}
