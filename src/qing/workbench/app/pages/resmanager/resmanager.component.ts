import { Component } from "@angular/core";
import { ElectronService } from "@qing/workbench/app/core/services";

@Component({
  selector: "resmanager",
  templateUrl: "./resmanager.component.html",
  styleUrls: ["./resmanager.component.scss"],
})
export class ResmanagerComponent {
  constructor(private electronService: ElectronService) {}

  public loadElementEditor(): void {
    this.electronService.loadElementEditor();
  }
}
