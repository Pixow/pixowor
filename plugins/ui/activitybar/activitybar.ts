import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  NgModule,
  OnInit,
} from "@angular/core";
import { PluginStore, usePluginStore } from "angular-pluggable";
import { TooltipModule } from "primeng/tooltip";
// TODO: import from "workbench/types"
import { ActivitybarItem } from "workbench/app/models/activity";

@Component({
  selector: "activitybar",
  templateUrl: "./activitybar.component.html",
  styleUrls: ["./activitybar.component.scss"],
})
export class ActivitybarComponent implements OnInit {
  private pluginStore: PluginStore = usePluginStore();

  items: ActivitybarItem[];
  active: number = 0;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.pluginStore.getObserver("activitybar").subscribe((items: any) => {
      this.items = items.sort((a, b) => (a.index > b.index ? 1 : -1));

      const pluginsMarketItem = this.items.find((item) => item.title === "插件市场");
      if (this.active === 0) {
        this.doCommand(pluginsMarketItem);
      }
    });
  }

  doCommand(item) {
    this.active = item.index;
    item.command();
  }
}

@NgModule({
  declarations: [ActivitybarComponent],
  imports: [CommonModule, TooltipModule],
})
export class ActivitybarModule {}
