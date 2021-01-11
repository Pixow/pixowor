import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PageNotFoundComponent, ResmanagerTabsComponent, TabViewModule, UserProfileComponent } from "./components/";
import { AppPasswordDirective, HoverActiveDirective, WebviewDirective } from "./directives/";
import { FirstCharacterPipe } from "./pipes";

import { CheckboxModule } from "primeng/checkbox";
import { CarouselModule } from "primeng/carousel";
import { ProgressBarModule } from "primeng/progressbar";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { DropdownModule } from "primeng/dropdown";
import { DynamicDialogModule } from "primeng/dynamicdialog";

const COMPONENTS = [PageNotFoundComponent, ResmanagerTabsComponent, UserProfileComponent];

const DIRECTIVES = [WebviewDirective, AppPasswordDirective, HoverActiveDirective];

const PIPES = [FirstCharacterPipe];

const QINGMODULES = [TabViewModule];

const COMMONMODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const PRIMENGMODULES = [
  CheckboxModule,
  CarouselModule,
  ProgressBarModule,
  ProgressSpinnerModule,
  DropdownModule,
  DynamicDialogModule,
];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
  imports: [CommonModule, FormsModule],
  exports: [...COMPONENTS, ...DIRECTIVES, ...PIPES, ...COMMONMODULES, ...PRIMENGMODULES, QINGMODULES],
})
export class SharedModule {}
