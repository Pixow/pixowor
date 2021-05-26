import { AfterViewInit, Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: "menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit, AfterViewInit {
  items: MenuItem[] = [];
  constructor() {}

  ngOnInit() {
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
            command: () => {},
          },
          {
            label: "打开游戏",
            command: () => {},
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
        items: [
          { label: "Delete", icon: "pi pi-fw pi-trash" },
          { label: "Refresh", icon: "pi pi-fw pi-refresh" },
        ],
      },
      {
        label: "插件",
        items: [],
      },
      {
        label: "帮助",
        items: [{ label: "检查更新" }, { label: "帮助文档" }],
      },
    ];
  }

  ngAfterViewInit() {}
}
