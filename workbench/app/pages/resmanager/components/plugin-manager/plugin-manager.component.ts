import { Component, OnInit } from "@angular/core";
import { ElectronService } from "workbench/app/core/services";

@Component({
  selector: "plugin-manager",
  templateUrl: "./plugin-manager.component.html",
  styleUrls: ["./plugin-manager.component.scss"],
})
export class PluginManagerComponent implements OnInit {
  plugins = [
    {
      title: "游戏编辑器",
      name: "game-editor",
      icon: "assets/images/game-editor.svg",
    },
    {
      title: "物件编辑器",
      name: "element-editor",
      icon: "assets/images/element-editor.svg",
    },
  ];

  constructor(private electronService: ElectronService) {}

  ngOnInit(): void {}
}
