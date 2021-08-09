import { CommonModule } from "@angular/common";
import { Component, NgModule, OnInit } from "@angular/core";
import { PluginStore, usePluginStore, Event } from "angular-pluggable";

@Component({
  selector: "statusbar",
  templateUrl: "./statusbar.component.html",
  styleUrls: ["./statusbar.component.scss"],
})
export class StatusbarComponent implements OnInit {
  private pluginStore: PluginStore = usePluginStore();

  public status;

  ngOnInit() {
    console.log("Statusbar init----->");
    this.pluginStore.getObserver("status").subscribe((data) => {
      this.status = data;
    });
  }
}

@NgModule({
  declarations: [StatusbarComponent],
  imports: [CommonModule],
})
export class StatusModule {}
