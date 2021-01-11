import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: "./scene-tree.component.html",
  styleUrls: ["./scene-tree.component.scss"],
})
export class TreeComponent implements OnInit {
  constructor() {}

  public ngOnInit() {
    console.log("tree component init");
  }
}
