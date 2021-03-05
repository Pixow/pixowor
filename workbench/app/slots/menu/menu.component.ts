import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { DialogService } from "primeng/dynamicdialog";
import { WorkbenchMenu } from "workbench/puzzle";
import { ContextService } from "workbench/app/core/services";
import { MenuItem } from "primeng/api";
import { EDITOR_EVENTS, MENU_CONFIG_FILE } from "workbench/consts";

@Component({
  selector: "menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  items: MenuItem[];
  @ViewChild("anchor", { read: ViewContainerRef }) anchor: ViewContainerRef;
  constructor(private contextService: ContextService, private dialogService: DialogService) {}

  ngOnInit() {
    // this.contextService.getConfigData(MENU_CONFIG_FILE, ({ data }) => {
    //   const config = JSON.parse(data);

    //   this.items = config;
    // });

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

  addMenu(menu: MenuItem, index: number = 2) {
    this.items[index].items.push(menu);
  }
}
