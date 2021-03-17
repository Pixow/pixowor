import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { Slot } from "workbench/app/models/slot";
import { ContextService } from "workbench/app/core/services";
import { MessageService } from "primeng/api";
import { EDITOR_EVENTS } from "workbench/consts";

@Component({
  selector: "extensions",
  templateUrl: "./extensions.component.html",
  styleUrls: ["./extensions.component.scss"],
  providers: [MessageService],
})
export class ExtensionsComponent extends Slot implements OnInit, OnDestroy {
  private cdInterval = null;

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

  @ViewChild("extensions", { read: ViewContainerRef }) extensions: ViewContainerRef;
  constructor(private contextService: ContextService, private messageService: MessageService) {
    super();
  }

  ngOnInit() {}

  renderComponent(componentName: string) {
    const componentFactory = this.getComponentFactory(componentName);
    if (componentFactory) {
      const compRef = this.extensions.createComponent(componentFactory);
      this.cdInterval = setInterval(() => {
        compRef.changeDetectorRef.detectChanges();
      }, 50);
    }
  }

  ngOnDestroy() {
    clearInterval(this.cdInterval);
  }
}
