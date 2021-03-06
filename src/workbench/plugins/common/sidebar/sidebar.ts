import { CommonModule } from "@angular/common";
import { QEvent, PixoworCore, Severity, UIEvents } from "pixowor-core";
import { ChangeDetectorRef, Component, NgModule, Inject, OnInit, OnDestroy } from "@angular/core";
import { TooltipModule } from "primeng/tooltip";

interface ComponentItem {
  sequence: number;
  component: Component;
}

@Component({
  selector: "sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit, OnDestroy {
  items: ComponentItem[] = [];

  constructor(
    @Inject(PixoworCore) private pixoworCore: PixoworCore,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.pixoworCore.workspace.on(UIEvents.LOAD_IN_SIDEBAR, (args) => {
      const { componentName, sequence } = args;

      const component = this.pixoworCore.state.getComponent(componentName);

      this.items.push({
        sequence,
        component,
      });

      this.items.sort((a, b) => a.sequence - b.sequence);

      // 更新UI
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() { }
}

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, TooltipModule],
})
export class SidebarModule { }
