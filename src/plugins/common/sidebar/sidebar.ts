import { CommonModule } from "@angular/common";
import { ChangeDetectorRef, Component, NgModule, OnInit } from "@angular/core";
import { QingCore } from "qing-core";
import { TooltipModule } from "primeng/tooltip";
import { Inject } from "typedi";

@Component({
  selector: "sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  @Inject() qingCore: QingCore;
  items: [];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}
}

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, TooltipModule],
})
export class SidebarModule {}
