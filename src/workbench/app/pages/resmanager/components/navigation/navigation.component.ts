import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

export interface NavigationItem {
  title: string;
  icon: string;
  redirect: string;
}

@Component({
  selector: "navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
  activeIndex: number = 0;

  // @Input() items: TabItem[];

  public items: NavigationItem[] = [
    {
      title: "游戏",
      icon: "qing qing-game",
      redirect: "game-manager",
    },
    {
      title: "插件",
      icon: "qing qing-plug",
      redirect: "plugin-manager",
    },
    {
      title: "模块",
      icon: "qing qing-modules",
      redirect: "game-manager",
    },
    {
      title: "组",
      icon: "qing qing-group",
      redirect: "game-manager",
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  selectItem(item: NavigationItem, index: number) {
    this.activeIndex = index;
    console.log(this.router.url);
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      this.router.navigate([`resmanager/${item.redirect}`]);
    });
  }
}
