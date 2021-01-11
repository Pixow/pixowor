import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";

@Component({
  selector: "explorer",
  templateUrl: "./explorer.component.html",
  styleUrls: ["./explorer.component.scss"],
})
export class ExplorerComponent {
  constructor(private store: Store, private router: Router) {}
}
