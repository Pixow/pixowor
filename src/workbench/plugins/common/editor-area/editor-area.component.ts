import { Component, Inject, Injector, OnInit } from "@angular/core";
import { PixoworCore, UIEvents } from "pixowor-core";

export interface TabviewItem {
  id: string;
  header: string;
  content?: string;
  component?: any;
}

@Component({
  selector: "editor-area",
  templateUrl: "./editor-area.component.html",
  styleUrls: ["./editor-area.component.scss"],
})
export class EditorAreaComponent implements OnInit {
  activeIndex = 1;

  public items: { [k: string]: TabviewItem } = {};

  component: any;

  constructor(@Inject(PixoworCore) private pixoworCore: PixoworCore) {}

  ngOnInit() {
    // this.pluginStore.getObserver("stage").subscribe(items => {
    //   this.items = <TabviewItem[]>items;
    // })
    // this.pluginStore.addEventListener("ShowInStage", (event: Event) => {
    //   const item = (event as any).data;
    //   console.log(
    //     "🚀 ~ file: stage.component.ts ~ line 32 ~ StageComponent ~ this.pluginStore.addEventListener ~ item",
    //     item
    //   );
    //   item.injector = item.getInjector(this.inj);
    //   const index = this.items.findIndex((it) => it.id === item.id);
    //   if (index < 0) {
    //     this.items.push(item);
    //     this.activeIndex = this.items.length - 1;
    //   } else {
    //     this.activeIndex = index;
    //   }
    // });
    // this.pixoworCore.stateManager.getVariable("EditorAreaComponents").subscribe((data) => {
    //   this.items = this.items.concat(data.component);
    // });

    this.pixoworCore.workspace.on(UIEvents.INJECT_EDITOR_AREA, (args) => {
      const { id, componentName, header } = args;

      const component = this.pixoworCore.stateManager.getComponent(componentName);

      this.component = component;

      // this.items[id] = {
      //   id,
      //   header,
      //   component,
      // };
    });
  }

  public getItems() {
    return Object.values(this.items);
  }
}
