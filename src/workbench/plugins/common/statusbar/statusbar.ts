import { CommonModule } from "@angular/common";
import { Component, NgModule, OnInit, Inject } from "@angular/core";
import { PixoworCore, UIEvents } from "pixowor-core";

@Component({
  selector: "statusbar",
  templateUrl: "./statusbar.component.html",
  styleUrls: ["./statusbar.component.scss"],
})
export class StatusbarComponent implements OnInit {
  public statusItems;

  constructor(@Inject(PixoworCore) private pixoworCore: PixoworCore) { }

  ngOnInit() {
    this.pixoworCore.workspace.on(UIEvents.ADD_STATUS, (args) => {
      const { pluginName, message } = args;
      let status = this.pixoworCore.state.getVariable("statusbar");
      status[pluginName] = message;
    });
  }
}

@NgModule({
  declarations: [StatusbarComponent],
  imports: [CommonModule],
  providers: [PixoworCore],
})
export class StatusModule { }
