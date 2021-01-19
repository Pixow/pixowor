import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { IUser } from "workbench/app/models";
import { Observable } from "rxjs";

@Component({
  selector: "user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
})
export class UserProfileComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}
}
