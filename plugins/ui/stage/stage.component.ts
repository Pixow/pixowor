import { Component, Injector, OnInit } from "@angular/core";
import {PluginStore, usePluginStore, Event} from 'angular-pluggable'

export interface TabviewItem {
  id: number;
  header: string;
  content: string;
  component?: any;
}

@Component({
  selector: "stage",
  templateUrl: "./stage.component.html",
  styleUrls: ["./stage.component.scss"]
})
export class StageComponent implements OnInit {
  activeIndex = 1

  private pluginStore: PluginStore = usePluginStore();

  public items: TabviewItem[] = []

  constructor(private inj: Injector) {}

  ngOnInit() {
    // this.pluginStore.getObserver("stage").subscribe(items => {
    //   this.items = <TabviewItem[]>items;
    // })

    this.pluginStore.addEventListener("ShowInStage", (event: Event) => {
      const item = (event as any).data;
      console.log("🚀 ~ file: stage.component.ts ~ line 32 ~ StageComponent ~ this.pluginStore.addEventListener ~ item", item)
      item.injector = item.getInjector(this.inj)
      const index = this.items.findIndex(it => it.id === item.id)
      if (index < 0) {
        this.items.push(item)
        this.activeIndex = this.items.length - 1
      } else {
        this.activeIndex = index
      }
    });
  }
}