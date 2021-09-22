import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit } from "@angular/core";
import { QEvent, PixoworCore, Severity, UIEvents } from "pixowor-core";
import { User } from "pixow-api";
import { MenuItem } from "primeng/api";
import { TranslocoService } from "@ngneat/transloco";
import { ipcRenderer, remote } from "electron";
import storage from "electron-json-storage";

@Component({
  selector: "menubar",
  templateUrl: "./menubar.component.html",
  styleUrls: ["./menubar.component.scss"],
})
export class MenubarComponent implements OnInit, AfterViewInit {
  menuItems: MenuItem[];
  transloco: TranslocoService;

  constructor(
    @Inject(PixoworCore) private pixoworCore: PixoworCore,
    private cd: ChangeDetectorRef
  ) {
    this.transloco = pixoworCore.serviceManager.getService<TranslocoService>(TranslocoService);
  }

  ngOnInit() {
    this.menuItems = [
      {
        label: this.transloco.translate("menubar.file"),
        items: [
          {
            label: this.transloco.translate("menubar.signin"),
          },
          {
            label: this.transloco.translate("menubar.signout"),
          },
          {
            label: this.transloco.translate("menubar.savegame"),
            command: () => {},
          },
          {
            label: this.transloco.translate("menubar.buildsetting"),
            command: () => {},
          },
          {
            separator: true,
          },
          {
            label: this.transloco.translate("menubar.newproject"),
            command: () => {},
          },
          {
            label: this.transloco.translate("menubar.openproject"),
            command: () => {},
          },
          {
            label: this.transloco.translate("menubar.saveproject"),
            command: () => {},
          },
          {
            separator: true,
          },
          { label: this.transloco.translate("menubar.exit") },
        ],
      },
      {
        label: this.transloco.translate("menubar.game"),
        items: [
          { label: this.transloco.translate("menubar.newscene"), command: () => {} },
          { label: this.transloco.translate("menubar.gamesetting"), command: () => {} },
          { label: this.transloco.translate("menubar.runtobrowser"), command: () => {} },
          {
            label: this.transloco.translate("menubar.runtophoneemulator"),
            command: () => {},
          },
        ],
      },
      {
        label: this.transloco.translate("menubar.tools"),
        items: [
          { label: this.transloco.translate("menubar.editsetting") },
          {
            label: this.transloco.translate("menubar.pluginmanager"),
            command: () => {
              this.pixoworCore.workspace.openDialog("PluginsManage", {});
            },
          },
          { label: this.transloco.translate("menubar.packagemanager") },
        ],
      },
      {
        label: this.transloco.translate("menubar.communityplugins"),
        items: [],
      },
      {
        label: this.transloco.translate("menubar.help"),
        items: [
          { label: this.transloco.translate("menubar.gettingstarted") },
          { label: this.transloco.translate("menubar.luadoc") },
          {
            label: "测试单窗口打开",
            command: () => {
              ipcRenderer.send("openSubWindow");
            },
          },
        ],
      },
      {
        label: this.transloco.translate("menubar.lang"),
        items: [
          {
            label: "中文",
            command: () => {
              // TODO: 语言切换需要重启
              const settings = storage.getSync("settings");
              storage.set("settings", Object.assign(settings, { lang: "zh-CN" }), (error) => {
                if (error) {
                  console.error(error);
                  return;
                }
                ipcRenderer.send("relaunch");
              });
            },
          },
          {
            label: "English",
            command: () => {
              const settings = storage.getSync("settings");
              storage.set("settings", Object.assign(settings, { lang: "en" }), (error) => {
                if (error) {
                  console.error(error);
                  return;
                }
                ipcRenderer.send("relaunch");
              });
            },
          },
        ],
      },
    ];

    this.pixoworCore.stateManager.getVariable("user").subscribe((user: User) => {
      let item: MenuItem;

      let signoutItem: MenuItem = {
        label: this.transloco.translate("menubar.signout"),
        command: () => {
          this.pixoworCore.storageManager.remove("user");
          this.pixoworCore.stateManager.getVariable("user").next(null);
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
          label: this.transloco.translate("menubar.signin"),
          command: () => {
            this.pixoworCore.workspace.openDialog("Signin", {});
          },
        };

        signoutItem.disabled = true;
      }

      this.menuItems[0].items.splice(0, 2, ...[item, signoutItem]);
    });

    // TODO: 参数应该是插件名称，menubar给插件分配col和insertIndex
    this.pixoworCore.workspace.on(UIEvents.INJECT_PLUGIN_MENU, (args) => {
      const { pid, label, command } = args;
      this.menuItems[3].items.push({
        id: pid,
        label,
        command,
      });

      // 更新UI
      this.cd.detectChanges();
    });

    this.pixoworCore.workspace.on(UIEvents.UNINJECT_PLUGIN_MENU, (args) => {
      const { pid } = args;
      const idx = this.menuItems[3].items.findIndex((item) => item.id === pid);
      console.log(
        "🚀 ~ file: menubar.component.ts ~ line 181 ~ MenubarComponent ~ this.pixoworCore.workspace.on ~ idx",
        idx
      );
      this.menuItems[3].items.splice(idx, 1);

      // 更新UI
      this.cd.detectChanges();
    });
  }

  ngAfterViewInit() {}
}
