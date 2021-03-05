import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  templateUrl: "./workbench-menu.component.html",
  styleUrls: ["./workbench-menu.component.scss"],
})
export class WorkbenchMenuComponent implements OnInit {
  items: MenuItem[];

  @Output() open: EventEmitter<any> = new EventEmitter();

  constructor() {}

  public ngOnInit() {
    this.items = [
      {
        label: "游戏",
        items: [
          {
            label: "新建",
            icon: "pi pi-fw pi-plus",
            // items: [{ label: "Project" }, { label: "Other" }],
          },
          {
            label: "登录",
            command: () => {
              this.open.emit("signin-plugin");
            },
          },
          {
            label: "打开游戏",
            command: () => {
              this.open.emit("resmanager");
            },
          },
          { label: "最近打开" },
          {
            separator: true,
          },
          {
            label: "设置",
          },
          {
            separator: true,
          },
          { label: "退出" },
        ],
      },
      {
        label: "Edit",
        icon: "pi pi-fw pi-pencil",
        items: [
          { label: "Delete", icon: "pi pi-fw pi-trash" },
          { label: "Refresh", icon: "pi pi-fw pi-refresh" },
        ],
      },
      {
        label: "帮助",
        items: [{ label: "检查更新" }, { label: "帮助文档" }],
      },
    ];
  }
}
