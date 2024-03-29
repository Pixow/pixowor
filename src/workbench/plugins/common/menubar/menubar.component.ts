import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit } from "@angular/core";
import { QEvent, PixoworCore, Severity, UIEvents, EDITING_SCENE } from "pixowor-core";
import { User } from "pixowor-core";
import { MenuItem, MessageService } from "primeng/api";
import { TranslocoService } from "@ngneat/transloco";
import { ipcRenderer, remote } from "electron";
import storage from "electron-json-storage";
import { Capsule } from "game-capsule";

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
    this.transloco = pixoworCore.service.getService<TranslocoService>(TranslocoService);
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
            separator: true,
          },
          {
            label: this.transloco.translate("menubar.new_game_project"),
            command: () => {
              this.newGameProject();
            },
          },
          {
            label: this.transloco.translate("menubar.open_game_project"),
            command: () => { },
          },
          {
            label: this.transloco.translate("menubar.save_game_project"),
            command: () => {
              this.saveGameProject();
            },
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
          { label: this.transloco.translate("menubar.newscene"), command: () => { } },
          { label: this.transloco.translate("menubar.gamesetting"), command: () => { } },
          { label: this.transloco.translate("menubar.runtobrowser"), command: () => { } },
          {
            label: this.transloco.translate("menubar.runtophoneemulator"),
            command: () => { },
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
          // {
          //   label: "测试单窗口打开",
          //   command: () => {
          //     ipcRenderer.send("openSubWindow", {component: ""});
          //   },
          // },
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

    this.pixoworCore.state.getVariable<User>("user").subscribe((user: User) => {
      let item: MenuItem;

      let signoutItem: MenuItem = {
        label: this.transloco.translate("menubar.signout"),
        command: () => {
          this.pixoworCore.storage.remove("user");
          this.pixoworCore.state.getVariable("user").next(null);
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
      const { pid, label, type, command } = args;

      if (type === "subwindow") {
        this.menuItems[3].items.push({
          id: pid,
          label,
          command: () => {
            ipcRenderer.send("openSubWindow", {
              pluginId: pid,
            });
          },
        });
      } else {
        this.menuItems[3].items.push({
          id: pid,
          label,
          command,
        });
      }

      // 更新UI
      this.cd.detectChanges();
    });

    this.pixoworCore.workspace.on(UIEvents.UNINJECT_PLUGIN_MENU, (args) => {
      const { pid } = args;
      const idx = this.menuItems[3].items.findIndex((item) => item.id === pid);
      this.menuItems[3].items.splice(idx, 1);

      // 更新UI
      this.cd.detectChanges();
    });
  }

  public newGameProject() {
    this.pixoworCore.workspace.openDialog("NewGameProject", {
      header: "New Game Project",
      width: "20%",
    });
  }

  public saveGameProject() {
    const sceneCapsule = this.pixoworCore.state
      .getVariable<Capsule>("SceneCapsule")
      .getValue();
    const editScene = this.pixoworCore.getEditingObject(EDITING_SCENE);

    this.pixoworCore.fileSystem
      .writeFile(editScene.filePath, sceneCapsule.serialize())
      .then(() => {
        this.pixoworCore.workspace.toast(Severity.SUCCESS, "Save Scene Successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  ngAfterViewInit() { }
}
