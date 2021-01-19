import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { ContextService } from "workbench/app/core/services";

@Component({
  selector: "explorer",
  templateUrl: "./explorer.component.html",
  styleUrls: ["./explorer.component.scss"],
})
export class ExplorerComponent implements OnInit {
  @ViewChild("anchor", { read: ViewContainerRef }) anchor: ViewContainerRef;
  constructor(private contextService: ContextService) {}

  ngOnInit() {
    this.contextService.activityItem$.subscribe((item) => {
      if (item) {
        this.createComponent(item.id);
      }
    });
  }

  createComponent(pluginName: string) {
    const componentFactory = this.contextService.getComponentFactory(pluginName);
    if (componentFactory) {
      this.anchor.clear();
      this.anchor.createComponent(componentFactory);
    }
  }
}
