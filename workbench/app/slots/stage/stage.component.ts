import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
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
export class StageComponent extends Slot implements OnInit {
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

  @ViewChild("sceneEditor", { read: ViewContainerRef }) sceneEditor: ViewContainerRef;
  constructor(private contextService: ContextService, private messageService: MessageService) {
    super();
  }

  ngOnInit() {}

  createSceneEditor() {
    const componentFactory = this.contextService.getComponentFactory("SceneEditorComponent");
    if (componentFactory) {
      this.sceneEditor.clear();
      this.sceneEditor.createComponent(componentFactory);
    }
  }

  registComponent(componentName) {}

  renderComponent(componentName: string) {
    const componentFactory = this.contextService.getComponentFactory(componentName);
    if (componentFactory) {
      this.sceneEditor.clear();
      this.sceneEditor.createComponent(componentFactory);
    }
  }
}
