import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Event, QingCore, Severity, UIEvents, User } from "qing-core";
import { MenuItem } from "primeng/api";
import { TranslocoService } from "@ngneat/transloco";
@Component({
  selector: "menubar",
  templateUrl: "./menubar.component.html",
  styleUrls: ["./menubar.component.scss"],
})
export class MenubarComponent implements OnInit, AfterViewInit {
  menuItems: MenuItem[];
  translocoService: TranslocoService;

  constructor(private qingCore: QingCore, private cd: ChangeDetectorRef) {
    this.translocoService = qingCore.GetService<TranslocoService>(TranslocoService);
  }

  ngOnInit() {
    console.log("MenubarComponent init");

    this.menuItems = [
      {
        label: this.translocoService.translate("menubar.file"),
        items: [
          {
            label: this.translocoService.translate("menubar.signin"),
          },
          {
            label: this.translocoService.translate("menubar.signout"),
          },
          {
            label: this.translocoService.translate("menubar.savegame"),
            command: () => {},
          },
          {
            label: this.translocoService.translate("menubar.buildsetting"),
            command: () => {},
          },
          {
            separator: true,
          },
          {
            label: this.translocoService.translate("menubar.newproject"),
            command: () => {},
          },
          {
            label: this.translocoService.translate("menubar.openproject"),
            command: () => {},
          },
          {
            label: this.translocoService.translate("menubar.saveproject"),
            command: () => {},
          },
          {
            separator: true,
          },
          { label: this.translocoService.translate("menubar.exit") },
        ],
      },
      {
        label: this.translocoService.translate("menubar.game"),
        items: [
          { label: this.translocoService.translate("menubar.newscene"), command: () => {} },
          { label: this.translocoService.translate("menubar.gamesetting"), command: () => {} },
          { label: this.translocoService.translate("menubar.runtobrowser"), command: () => {} },
          {
            label: this.translocoService.translate("menubar.runtophoneemulator"),
            command: () => {},
          },
        ],
      },
      {
        label: this.translocoService.translate("menubar.tools"),
        items: [
          { label: this.translocoService.translate("menubar.editsetting") },
          {
            label: this.translocoService.translate("menubar.pluginmanager"),
            command: () => {
              this.qingCore.OpenDialog("plugins-market");
            },
          },
          { label: this.translocoService.translate("menubar.packagemanager") },
        ],
      },
      {
        label: this.translocoService.translate("menubar.help"),
        items: [
          { label: this.translocoService.translate("menubar.gettingstarted") },
          { label: this.translocoService.translate("menubar.luadoc") },
        ],
      },
      {
        label: this.translocoService.translate("menubar.lang"),
        items: [
          {
            label: "中文",
            command: () => {
              // TODO: 语言切换需要重启
              this.qingCore.SetDefaultLang("zh-CN");
            },
          },
          {
            label: "English",
            command: () => {
              this.qingCore.SetDefaultLang("en");
            },
          },
        ],
      },
    ];

    this.qingCore.GetVariable("user").subscribe((user: User) => {
      let item: MenuItem;

      let signoutItem: MenuItem = {
        label: this.translocoService.translate("menubar.signout"),
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
          label: this.translocoService.translate("menubar.signin"),
          command: () => {
            this.qingCore.OpenDialog("Signin");
          },
        };

        signoutItem.disabled = true;
      }

      this.menuItems[0].items.splice(0, 2, ...[item, signoutItem]);
    });

    // TODO: 参数应该是插件名称，menubar给插件分配col和insertIndex
    this.qingCore.On(UIEvents.ACTIVATE_IN_MENU, (event: Event) => {
      const { col, insertIndex, label, cb } = event.data;
      this.menuItems[col].items.splice(insertIndex, 0, {
        label,
        command: cb,
      });

      // 更新UI
      this.cd.detectChanges();
    });

    this.qingCore.On(UIEvents.DEACTIVATE_IN_MENU, (event: Event) => {
      const { col, insertIndex } = event.data;
      this.menuItems[col].items.splice(insertIndex, 1);

      // 更新UI
      this.cd.detectChanges();
    });
  }

  ngAfterViewInit() {}
}
