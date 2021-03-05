import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
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
    const componentFactory = this.contextService.getEntryComponent(pluginId);
    if (componentFactory) {
      this.anchor.clear();
      this.anchor.createComponent(componentFactory);
    }
  }
}
