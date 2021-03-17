import { Component, ComponentFactory, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { Slot } from "workbench/app/models/slot";
import { ContextService } from "workbench/app/core/services";
import { MessageService } from "primeng/api";

@Component({
  selector: "explorer",
  templateUrl: "./explorer.component.html",
  styleUrls: ["./explorer.component.scss"],
  providers: [MessageService],
})
export class ExplorerComponent extends Slot implements OnInit {
  @ViewChild("anchor", { read: ViewContainerRef }) anchor: ViewContainerRef;
  constructor(private contextService: ContextService) {
    super();
  }

  pluginComponentFactories = new Map<string, ComponentFactory<unknown>>();

  ngOnInit() {
    // this.contextService.activityItem$.subscribe((item) => {
    //   if (item) {
    //     this.renderComponent(item.id);
    //   }
    // });
  }

  renderComponent(componentName: string) {
    const componentFactory = this.getComponentFactory(componentName);
    if (componentFactory) {
      this.anchor.clear();
      this.anchor.createComponent(componentFactory);
    }
  }
}
