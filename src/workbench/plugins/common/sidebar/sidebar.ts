import { CommonModule } from "@angular/common";
import { ChangeDetectorRef, Component, NgModule, OnInit } from "@angular/core";
import { TooltipModule } from "primeng/tooltip";

@Component({
  selector: "sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  items: [];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}
}

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, TooltipModule],
})
export class SidebarModule {}
