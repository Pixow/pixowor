import { CommonModule } from "@angular/common";
import {
  Component,
  ContentChildren,
  Directive,
  Input,
  NgModule,
  OnInit,
  Output,
  QueryList,
  EventEmitter,
  AfterContentInit,
  ChangeDetectionStrategy,
} from "@angular/core";
import { isEmpty } from "lodash-es";

@Component({
  selector: "[tabViewNav]",
  templateUrl: "./tab-view-nav.html",
  styleUrls: ["./tab-view.scss"],
})
export class TabViewNav {
  @Input() tabs: TabPanel[];

  @Output() onTabClick: EventEmitter<any> = new EventEmitter();

  @Output() onTabCloseClick: EventEmitter<any> = new EventEmitter();

  clickTab(event, tab: TabPanel) {
    this.onTabClick.emit({
      originalEvent: event,
      tab,
    });
  }

  clickClose(event, tab: TabPanel) {
    this.onTabCloseClick.emit({
      originalEvent: event,
      tab,
    });
  }
}

@Component({
  selector: "tab-panel",
  templateUrl: "./tab-panel.html",
  styleUrls: ["./tab-view.scss"],
})
export class TabPanel implements OnInit {
  @Input() header: string;

  selected: boolean = false;

  closable: boolean = false;

  constructor() {}

  ngOnInit() {}
}

@Component({
  selector: "tab-view",
  templateUrl: "./tab-view.html",
  styleUrls: ["./tab-view.scss"],
})
export class TabView implements AfterContentInit {
  tabs: TabPanel[];

  _activeIndex: number = 0;

  @ContentChildren(TabPanel) tabPanels: QueryList<TabPanel>;

  @Input() get activeIndex() {
    return this._activeIndex;
  }

  set activeIndex(val: number) {
    this._activeIndex = val;
    if (!isEmpty(this.tabs)) {
      this.tabs[this._activeIndex].selected = true;
      this.tabs[this._activeIndex].closable = true;
    }
  }

  constructor() {}

  ngAfterContentInit(): void {
    this.initTabs();
  }

  initTabs(): void {
    this.tabs = this.tabPanels.toArray();

    if (!isEmpty(this.tabs)) {
      if (this._activeIndex != null) {
        this.tabs[this._activeIndex].selected = true;
        this.tabs[this._activeIndex].closable = true;
      }
    }
  }

  findSelectedTab() {
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].selected) {
        return this.tabs[i];
      }
    }

    return null;
  }

  findTabIndex(tab: TabPanel) {
    let index = -1;
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i] === tab) {
        index = i;
        break;
      }
    }

    return index;
  }

  open(event: Event, tab: TabPanel) {
    if (!tab.selected) {
      let selectedTab: TabPanel = this.findSelectedTab();
      if (selectedTab) selectedTab.selected = false;

      tab.selected = true;

      const selectedTabIndex = this.findTabIndex(tab);
      this.activeIndex = selectedTabIndex;
    }
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [TabViewNav, TabView, TabPanel],
  exports: [TabView, TabPanel],
})
export class TabViewModule {}
