import { Component, Injector, OnInit } from "@angular/core";
import { QingCore } from "qing-core";

export interface TabviewItem {
  id: number;
  header: string;
  content: string;
  component?: any;
}

@Component({
  selector: "editor-area",
  templateUrl: "./editor-area.component.html",
  styleUrls: ["./editor-area.component.scss"],
})
export class EditorAreaComponent implements OnInit {
  activeIndex = 1;

  public items: TabviewItem[] = [];

  constructor(private qingCore: QingCore) {}

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

    this.qingCore.GetVariable("EditorAreaComponents").subscribe((data) => {
      this.items = this.items.concat(data.component);
    });
  }
}
