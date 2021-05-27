import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppPasswordDirective, HoverActiveDirective, WebviewDirective } from "./directives/";
import { FirstCharacterPipe } from "./pipes";

import { CheckboxModule } from "primeng/checkbox";
import { CarouselModule } from "primeng/carousel";
import { ProgressBarModule } from "primeng/progressbar";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { DropdownModule } from "primeng/dropdown";
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { DialogModule } from "primeng/dialog";
import { AccordionModule } from "primeng/accordion";
import { FileUploadModule } from "primeng/fileupload";
import { MenubarModule } from "primeng/menubar";
import { RendererModule } from "angular-pluggable";

const COMPONENTS = [];

const DIRECTIVES = [WebviewDirective, AppPasswordDirective, HoverActiveDirective];

const PIPES = [FirstCharacterPipe];

const QINGMODULES = [];

const COMMONMODULES = [CommonModule, FormsModule, ReactiveFormsModule, RendererModule];

const PRIMENGMODULES = [
  CheckboxModule,
  CarouselModule,
  ProgressBarModule,
  ProgressSpinnerModule,
  DropdownModule,
  DynamicDialogModule,
  AccordionModule,
  DialogModule,
  FileUploadModule,
  MenubarModule,
];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
  imports: [...COMMONMODULES, ...PRIMENGMODULES],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
    ...COMMONMODULES,
    ...PRIMENGMODULES,
    ...QINGMODULES,
  ],
})
export class SharedModule {}
