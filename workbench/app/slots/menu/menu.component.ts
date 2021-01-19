import { Component, ComponentFactoryResolver, EventEmitter, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { DialogService } from "primeng/dynamicdialog";
import { WorkbenchMenu } from "types/index";
import { ContextService } from "workbench/app/core/services";

@Component({
  selector: "menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  @ViewChild("anchor", { read: ViewContainerRef }) anchor: ViewContainerRef;
  constructor(private contextService: ContextService, private dialogService: DialogService) {}

  ngOnInit() {}

  createComponent(factory) {
    this.anchor.clear();
    const ref = this.anchor.createComponent(factory);

    (ref.instance as WorkbenchMenu).open.subscribe((data) => {
      const pluginComponent = this.contextService.getComponent(data);
      if (!pluginComponent) {
        throw new Error(`${data} is not installed!`);
      }

      this.dialogService.open(pluginComponent as any, {});
    });
  }
}
