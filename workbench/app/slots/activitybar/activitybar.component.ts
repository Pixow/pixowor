import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";

interface ActivitybarItem {
  label: string;
  icon: string;
}

@Component({
  selector: "activitybar",
  templateUrl: "./activitybar.component.html",
  styleUrls: ["./activitybar.component.scss"],
})
export class ActivitybarComponent {
  @Input("items") items: ActivitybarItem[];

  constructor(private store: Store, private router: Router) {}
}
