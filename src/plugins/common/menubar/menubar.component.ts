import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Event, PluginStore, usePluginStore } from "angular-pluggable";
import { MenuItem } from "primeng/api";
import { User } from "@workbench/app/models/user";
import { LocalStorage } from "@workbench/app/utils/localstorage";

@Component({
  selector: "menubar",
  templateUrl: "./menubar.component.html",
  styleUrls: ["./menubar.component.scss"],
})
export class MenubarComponent implements OnInit, AfterViewInit {
  private pluginStore: PluginStore = usePluginStore();
  items: MenuItem[] = [];
  constructor() {}

  ngOnInit() {
    this.pluginStore.getObserver("user").subscribe((user: User) => {
      let authItem = user
        ? {
            label: user.nickname,
            command: () => {
              LocalStorage.remove("user");
              this.pluginStore.getObserver("user").next(null);
            },
          }
        : {
            label: "登录",
            command: () => {
              this.pluginStore.dispatchEvent(
                new Event("ShowInDialog", {
                  componentName: "Signin",
                  config: {},
                })
              );
            },
          };
      this.items = [
        {
          label: "游戏",
          items: [
            authItem,
            {
              label: "新建游戏",
              icon: "pi pi-fw pi-plus",
              // items: [{ label: "Project" }, { label: "Other" }],
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
    });
  }

  ngAfterViewInit() {}
}
