import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { Slot } from "workbench/app/models/slot";
import { ContextService } from "workbench/app/core/services";
import { MessageService } from "primeng/api";

@Component({
  selector: "stage",
  templateUrl: "./stage.component.html",
  styleUrls: ["./stage.component.scss"],
  providers: [MessageService],
})
export class StageComponent extends Slot implements OnInit {
  @ViewChild("anchor", { read: ViewContainerRef }) anchor: ViewContainerRef;
  constructor(private contextService: ContextService, private messageService: MessageService) {
    super();
  }

  ngOnInit() {
    this.contextService.activityItem$.subscribe((item) => {
      if (item) {
        this.createComponent(item.id);
      }
    });
  }

  createComponent(pluginId: string) {
    const componentFactory = this.contextService.getComponentFactory(pluginId);
    if (componentFactory) {
      this.anchor.clear();
      this.anchor.createComponent(componentFactory);
    }
  }

  registComponent(componentName) {}
}
