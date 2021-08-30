import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Event, QingCore, Severity, UIEvents } from "qing-core";
import { MenuItem } from "primeng/api";
import { User } from "@workbench/app/models/user";

@Component({
  selector: "menubar",
  templateUrl: "./menubar.component.html",
  styleUrls: ["./menubar.component.scss"],
})
export class MenubarComponent implements OnInit, AfterViewInit {
  menuItems: MenuItem[] = [
    {
      label: "文件",
      items: [
        {
          label: "登录",
        },
        {
          label: "退出登录",
        },
        {
          label: "保存游戏",
          command: () => {},
        },
        {
          label: "编译配置",
          command: () => {
            this.qingCore.Toast(Severity.INFO, "打开游戏 ");
          },
        },
        {
          separator: true,
        },
        {
          label: "新建项目",
          command: () => {},
        },
        {
          label: "打开项目",
          command: () => {},
        },
        {
          label: "保存项目",
          command: () => {},
        },
        {
          separator: true,
        },
        { label: "退出" },
      ],
    },
    {
      label: "游戏",
      items: [
        { label: "新建场景", command: () => {} },
        { label: "游戏配置", command: () => {} },
        { label: "运行到浏览器", command: () => {} },
        { label: "运行到手机模拟器", command: () => {} },
      ],
    },
    {
      label: "工具",
      items: [
        { label: "编辑器设置" },
        {
          label: "插件管理",
          command: () => {
            this.qingCore.OpenDialog("plugins-market");
          },
        },
        { label: "包管理" },
      ],
    },
    {
      label: "帮助",
      items: [{ label: "入门教程" }, { label: "LUA 文档" }],
    },
  ];
  constructor(private qingCore: QingCore) {}

  ngOnInit() {
    this.qingCore.GetVariable("user").subscribe((user: User) => {
      let item: MenuItem;

      let signoutItem: MenuItem = {
        label: "退出登录",
        command: () => {
          this.qingCore.Remove("user");
          this.qingCore.getObserver("user").next(null);
        },
        disabled: true,
      };

      if (user) {
        item = {
          label: user.nickname,
          disabled: true,
        };

        signoutItem.disabled = false;
      } else {
        item = {
          label: "登录",
          command: () => {
            this.qingCore.OpenDialog("Signin");
          },
        };

        signoutItem.disabled = true;
      }

      this.menuItems[0].items.splice(0, 2, ...[item, signoutItem]);
    });

    // TODO: 支持外部安装插件自定义menuitem
    this.qingCore.On(UIEvents.LOAD_IN_MENU, (event: Event) => {
      const { col, insertIndex, label, cb } = event.data;
      this.menuItems[col].items.splice(insertIndex, 0, {
        label,
        command: cb,
      });
    });
  }

  ngAfterViewInit() {}
}
