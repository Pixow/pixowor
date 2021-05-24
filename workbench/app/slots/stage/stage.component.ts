import { Component, NgZone, OnDestroy, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { Slot } from "workbench/app/models/slot";
import { ContextService } from "workbench/app/core/services";
import { MessageService } from "primeng/api";
import { EDITOR_EVENTS } from "workbench/consts";

@Component({
  selector: "stage",
  templateUrl: "./stage.component.html",
  styleUrls: ["./stage.component.scss"],
  providers: [MessageService],
})
export class StageComponent extends Slot implements OnInit, OnDestroy {
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

  @ViewChild("stage", { read: ViewContainerRef }) stage: ViewContainerRef;
  constructor(private contextService: ContextService, private ngZone: NgZone) {
    super();
  }

  ngOnInit() {}

  renderComponent(componentName: string) {
    const componentFactory = this.getComponentFactory(componentName);
    if (componentFactory) {
      this.stage.clear();
      const compRef = this.stage.createComponent(componentFactory);
      this.cdInterval = setInterval(() => {
        compRef.changeDetectorRef.detectChanges();
      }, 50);
    }
  }

  ngOnDestroy() {
    clearInterval(this.cdInterval);
  }
}
