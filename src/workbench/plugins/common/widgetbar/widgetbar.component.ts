import { CommonModule } from "@angular/common";
import { QEvent, PixoworCore, Severity, UIEvents } from "pixowor-core";
import { ChangeDetectorRef, Component, NgModule, Inject, OnInit, OnDestroy } from "@angular/core";
import { TooltipModule } from "primeng/tooltip";

interface ComponentItem {
  component;
}

@Component({
  selector: "widgetbar",
  templateUrl: "./widgetbar.component.html",
  styleUrls: ["./widgetbar.component.scss"],
})
export class WidgetbarComponent implements OnInit, OnDestroy {
  items: ComponentItem[] = [];

  constructor(
    @Inject(PixoworCore) private pixoworCore: PixoworCore,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.pixoworCore.workspace.on(UIEvents.LOAD_IN_WIDGETBAR, (args) => {
      console.log(
        "🚀 ~ file: widgetbar.component.ts ~ line 25 ~ WidgetbarComponent ~ this.pixoworCore.workspace.on ~ args",
        args
      );
      const { componentName } = args;

      const component = this.pixoworCore.state.getComponent(componentName);

      this.items.push({
        component,
      });

      // 更新UI
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() { }
}

@NgModule({
  declarations: [WidgetbarComponent],
  imports: [CommonModule, TooltipModule],
})
export class SidebarModule { }
