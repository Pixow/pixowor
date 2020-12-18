import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent {
  public signinForm = new FormGroup({});

  constructor() {}
}
