import { CommonModule } from "@angular/common";
import { Injector, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CarouselModule } from "primeng/carousel";
import { ProgressBarModule } from "primeng/progressbar";
import { CheckboxModule } from "primeng/checkbox";

import { ActivitybarComponent } from "./src/activitybar/activitybar.component";
import { createCustomElement } from "@angular/elements";

@NgModule({
  declarations: [ActivitybarComponent],
  imports: [CommonModule, CarouselModule, FormsModule, ReactiveFormsModule, ProgressBarModule, CheckboxModule],
  exports: [ActivitybarComponent],
  entryComponents: [ActivitybarComponent],
})
export class ActivitybarPluginModule {
  constructor(injector: Injector) {
    const ActivitybarElement = createCustomElement(ActivitybarComponent, { injector });
    customElements.define("activity-bar", ActivitybarElement);
  }
}
