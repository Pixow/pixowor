import { Component, Input, OnInit } from "@angular/core";

export interface TabItem {
  title: string;
}

@Component({
  selector: "resmanager-tabs",
  templateUrl: "./resmanager-tabs.component.html",
  styleUrls: ["./resmanager-tabs.component.scss"],
})
export class ResmanagerTabsComponent implements OnInit {
  activeIndex: number;

  // @Input() items: TabItem[];

  public items = [
    {
      title: "Reports",
    },
    {
      title: "Presentations",
    },
    {
      title: "Pinboards",
    },
    {
      title: "Tickets",
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  activeTab(index: number) {
    this.activeIndex = index;
  }

  handleChange() {}
}
