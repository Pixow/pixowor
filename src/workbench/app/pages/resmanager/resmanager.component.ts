import { Component } from "@angular/core";
import { Store } from "@ngxs/store";
import { ElectronService } from "@workbench/app/core/services";

@Component({
  selector: "resmanager",
  templateUrl: "./resmanager.component.html",
  styleUrls: ["./resmanager.component.scss"],
})
export class ResmanagerComponent {
  constructor(private electronService: ElectronService, private store: Store) {
    // store.dispatch(new GameAc());
  }

  public loadElementEditor(): void {
    this.electronService.loadElementEditor();
  }
}
