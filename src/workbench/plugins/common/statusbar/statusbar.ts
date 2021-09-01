import { CommonModule } from "@angular/common";
import { Component, NgModule, OnInit } from "@angular/core";
import { QingCore, Event, UIEvents } from "qing-core";

@Component({
  selector: "statusbar",
  templateUrl: "./statusbar.component.html",
  styleUrls: ["./statusbar.component.scss"],
})
export class StatusbarComponent implements OnInit {
  public statusItems;

  constructor(private qingCore: QingCore) {}

  ngOnInit() {
    this.qingCore.On(UIEvents.ADD_STATUS, (event: Event) => {
      const { pluginName, message } = event.data;
      let status = this.qingCore.GetVariable("statusbar");
      status[pluginName] = message;
    });
  }
}

@NgModule({
  declarations: [StatusbarComponent],
  imports: [CommonModule],
  providers: [QingCore],
})
export class StatusModule {}
