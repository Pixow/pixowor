import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { ContextService } from "workbench/app/core/services";
import { ActivitybarItem, Slot } from "workbench/app/models/slot";

@Component({
  selector: "activitybar",
  templateUrl: "./activitybar.component.html",
  styleUrls: ["./activitybar.component.scss"],
})
export class ActivitybarComponent extends Slot implements AfterViewInit {
  constructor(private contextService: ContextService) {
    super();
  }

  public get items() {
    return this._items as ActivitybarItem[];
  }

  ngAfterViewInit() {}

  openExplorer(item: ActivitybarItem) {
    // this.contextService.setActivitybar(item);

    if (item["command"]) {
      item["command"](this.contextService);
    }
  }
}
