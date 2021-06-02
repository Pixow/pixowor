import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from "@angular/core";
import { Plugin } from "../../types";
import * as url from "url";
import { Environment } from "workbench/environments/environment";
import { MenuItem } from "primeng/api";

@Component({
  selector: "plugin-item",
  template: `
    <div class="plugin-item">
      <div class="plugin-logo">
        <img src="{{ getPluginLogo(plugin) }}" />
      </div>

      <p-tieredMenu #menu [model]="items" [popup]="true"></p-tieredMenu>
      <div class="plugin-info">
        <h3>
          {{ plugin.name }} <span>{{ plugin.version }}</span>
        </h3>
        <div class="plugin-info__detail">
          <p>{{ plugin.description }}</p>
          <i>{{ plugin.author }}</i>
        </div>
        <i class="menu-btn pi pi-cog" (click)="menu.toggle($event)"></i>

        <!-- <button (click)="handleInstall(plugin.name, plugin.version)">安装</button>
        <button (click)="handleActive(plugin.name)">激活</button> -->
      </div>
    </div>
  `,
  styleUrls: ["./plugin-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PluginItemComponent implements OnInit {
  items: MenuItem[];

  private _plugin: Plugin;

  @Input()
  set plugin(value: Plugin) {
    console.log(">> plugin item value: ", value);
    this._plugin = value;
  }
  get plugin() {
    return this._plugin;
  }

  @Input() installed: boolean = false;

  @Output() install = new EventEmitter();

  @Output() active = new EventEmitter();

  @Output() deactive = new EventEmitter();

  ngOnInit() {
    console.log(">> init");
    if (this.plugin.hasOwnProperty("active")) {
      this.items = [
        {
          label: "禁用",
          icon: "pi pi-fw pi-cloud-download",
          disabled: this.plugin.active ? false : true,
          command: () => {
            this.handleDeactive(this.plugin);
          },
        },
        {
          label: "激活",
          icon: "pi pi-fw pi-lock-open",
          disabled: this.plugin.active ? true : false,
          command: () => {
            this.handleActive(this.plugin);
          },
        },
      ];
    } else {
      this.items = [
        {
          label: "安装",
          icon: "pi pi-fw pi-cloud-download",
          command: () => {
            this.handleInstall(this.plugin);
          },
        },
      ];
    }
  }

  public getPluginLogo(plugin) {
    return url.resolve(
      Environment.WEB_RESOURCE_URI,
      `${plugin.name}/${plugin.version}/${plugin.icon}`
    );
  }

  handleInstall(plugin: Plugin) {
    this.install.emit({ plugin });
  }

  handleActive(plugin: Plugin) {
    this.active.emit({ plugin });
  }

  handleDeactive(plugin: Plugin) {
    this.deactive.emit({ plugin });
  }
}
