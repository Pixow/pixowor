import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MenuItem } from "primeng/api";
import { PluginLike } from "../../plugins-manage.component";

@Component({
  selector: "plugin-item",
  template: `
    <div class="plugin-item">
      <div class="plugin-name">
        <h3>{{ plugin.name }}</h3>

        <section>
          <span class="tag" *ngIf="plugin.updateAvailable">升级</span>
          <span class="tag disabled" *ngIf="plugin.installed">已安装</span>
          <span class="tag disabled" *ngIf="plugin.active">已激活</span>
          <span>{{ plugin.version }}</span>
        </section>
      </div>
      <p>{{ plugin.description }}</p>
      <div class="plugin-info__footer">
        <span>{{ plugin.author }}</span>
        <i class="pi pi-cog" #actions (click)="menu.toggle($event)"></i>
      </div>
      <p-tieredMenu #menu appendTo="body" [model]="items" [popup]="true"></p-tieredMenu>
    </div>
  `,
  styleUrls: ["./plugin-item.component.scss"],
})
export class PluginItemComponent implements OnInit {
  items: MenuItem[];

  @Input() plugin: PluginLike;

  @Input() installed: boolean = false;

  @Output() upload = new EventEmitter();

  @Output() install = new EventEmitter();

  @Output() uninstall = new EventEmitter();

  @Output() active = new EventEmitter();

  @Output() deactive = new EventEmitter();

  @Output() upgrade = new EventEmitter();

  @Output() deploy = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.items = this.getItems(this.plugin);
  }

  getItems(plugin) {
    const uploadItem = {
      label: "上传",
      icon: "pi pi-fw pi-cloud-download",
      command: () => {
        this.upload.emit();
      },
    };
    const activeItem = {
      label: "激活",
      icon: "pi pi-fw pi-lock-open",
      disabled: plugin.active ? true : false,
      command: () => {
        this.active.emit();
      },
    };
    const deactiveItem = {
      label: "禁用",
      icon: "pi pi-fw pi-cloud-download",
      disabled: plugin.active ? false : true,
      command: () => {
        this.deactive.emit();
      },
    };

    const uninstallItem = {
      label: "卸载",
      icon: "pi pi-fw pi-lock-open",
      command: () => {
        this.uninstall.emit();
      },
    };

    const deployItem = {
      label: "配置",
      icon: "pi pi-fw pi-lock-open",
      command: () => {
        this.deploy.emit();
      },
    };

    const upgradeItem = {
      label: "升级",
      icon: "pi pi-fw pi-lock-open",
      command: () => {
        this.upgrade.emit();
      },
    };

    const installItem = {
      label: "安装",
      icon: "pi pi-fw pi-cloud-download",
      command: () => {
        this.install.emit();
      },
    };

    if (plugin.hasOwnProperty("installed") && plugin.hasOwnProperty("isDevelop")) {
      if (plugin.installed === true && plugin.isDevelop === true) {
        return [uploadItem, activeItem, deactiveItem, uninstallItem, deployItem];
      } else {
        return [activeItem, deactiveItem, uninstallItem, upgradeItem, deployItem];
      }
    } else {
      return [installItem];
    }
  }
}
