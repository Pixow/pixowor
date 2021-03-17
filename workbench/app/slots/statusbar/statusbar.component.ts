import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { Slot } from "workbench/app/models/slot";
import { ContextService } from "workbench/app/core/services";
import { MessageService } from "primeng/api";

@Component({
  selector: "statusbar",
  templateUrl: "./statusbar.component.html",
  styleUrls: ["./statusbar.component.scss"],
  providers: [MessageService],
})
export class StatusbarComponent extends Slot implements OnInit {
  types = [
    {
      title: "场景",
      for: "scene",
    },
    {
      title: "物件",
      for: "element",
    },
    {
      title: "代码",
      for: "code",
    },
  ];

  @ViewChild("statusbar", { read: ViewContainerRef }) statusbar: ViewContainerRef;
  constructor(private contextService: ContextService, private messageService: MessageService) {
    super();
  }

  ngOnInit() {}

  registComponent(componentName) {}

  renderComponent(componentName: string) {
    const componentFactory = this.getComponentFactory(componentName);
    if (componentFactory) {
      this.statusbar.clear();
      this.statusbar.createComponent(componentFactory);
    }
  }
}
