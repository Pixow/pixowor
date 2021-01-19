import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { ActivitybarItem } from "workbench/types/typing";
import { ContextService } from "workbench/app/core/services";

@Component({
  selector: "activitybar",
  templateUrl: "./activitybar.component.html",
  styleUrls: ["./activitybar.component.scss"],
})
export class ActivitybarComponent implements AfterViewInit {
  @Input() items: ActivitybarItem[] = [];

  constructor(private contextService: ContextService) {}

  ngAfterViewInit() {}

  openExplorer(item: ActivitybarItem) {
    this.contextService.setActivitybar(item);
  }
}
