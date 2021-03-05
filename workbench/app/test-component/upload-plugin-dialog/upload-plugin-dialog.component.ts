import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "upload-plugin-dialog",
  template: "./upload-plugin-dialog.component.html",
  styleUrls: ["./upload-plugin-dialog.component.scss"],
})
export class UploadPluginDialogComponent {
  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      pluginName: new FormControl("", Validators.required),
    });
  }
}
