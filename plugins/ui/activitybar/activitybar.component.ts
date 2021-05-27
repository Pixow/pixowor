import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  NgModule,
  OnInit,
} from "@angular/core";
import { PluginStore, usePluginStore } from "angular-pluggable";
import { TooltipModule } from "primeng/tooltip";
import { ContextService } from "workbench/app/core/services/context.service";
import { ActivitybarItem } from "workbench/app/models/activity";

@Component({
  selector: "activitybar",
  templateUrl: "./activitybar.component.html",
  styleUrls: ["./activitybar.component.scss"],
})
export class ActivitybarComponent implements OnInit, AfterViewInit {
  private pluginStore: PluginStore = usePluginStore();

  items: ActivitybarItem[];
  active: number = 0;

  constructor() {}

  ngOnInit() {
    this.pluginStore.getObserver("activitybar").subscribe((items: any) => {
      this.items = items.sort((a, b) => (a.index > b.index ? 1 : -1));
    });

    // this.pluginStore.getContext<ContextService>().activityItem$.subscribe((items) => {
    //   this.items = items.sort((a, b) => (a.index > b.index ? 1 : -1));
    // });
  }

  ngAfterViewInit() {}
}

@NgModule({
  declarations: [ActivitybarComponent],
  imports: [CommonModule, TooltipModule],
})
export class ActivitybarModule {
  constructor(private resolver: ComponentFactoryResolver) {}

  public resolveComponentFactory(): ComponentFactory<ActivitybarComponent> {
    return this.resolver.resolveComponentFactory(ActivitybarComponent);
  }
}
