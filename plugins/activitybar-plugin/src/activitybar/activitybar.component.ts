import { Component } from "@angular/core";

interface ActivitybarItem {
  label: string;
  icon: string;
}

@Component({
  selector: "activity-bar",
  templateUrl: "./activitybar.component.html",
  styleUrls: ["./activitybar.component.scss"],
})
export class ActivitybarComponent {
  items: ActivitybarItem[];

  constructor() {
    this.items = [
      {
        label: "集市",
        icon: "qing qing-market",
      },
      {
        label: "功能库",
        icon: "qing qing-modules",
      },
      {
        label: "公共库",
        icon: "qing qing-function",
      },
      {
        label: "插件",
        icon: "qing qing-plug",
      },
    ];
  }
}
