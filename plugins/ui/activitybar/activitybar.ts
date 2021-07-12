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
  activeItem: ActivitybarItem;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.pluginStore.getObserver("activitybar").subscribe((items: any) => {
      console.log(
        "🚀 ~ file: activitybar.ts ~ line 31 ~ ActivitybarComponent ~ this.pluginStore.getObserver ~ items",
        items
      );
      this.items = items;

      const pluginsMarketItem = this.items.find((item) => item.id === "plugins-market");
      if (!this.activeItem) {
        this.doCommand(pluginsMarketItem);
      }
    });
  }

  doCommand(item) {
    console.log(">> do command: ", this.items, item);
    this.activeItem = this.items.find((it) => it.id === item.id);
    item.command();
  }
}

@NgModule({
  declarations: [ActivitybarComponent],
  imports: [CommonModule, TooltipModule],
})
export class ActivitybarModule {}
