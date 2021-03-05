import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
  PageNotFoundComponent,
  ResmanagerTabsComponent,
  TabViewModule,
  UserProfileComponent,
} from "./components/";

import { TestPluginMarketComponent } from "../test-component/test-plugin-market/test-plugin-market.component";

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

const COMPONENTS = [
  PageNotFoundComponent,
  ResmanagerTabsComponent,
  UserProfileComponent,
  TestPluginMarketComponent,
];

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
