import { AfterViewInit, Component } from "@angular/core";
import { ContextService } from "workbench/app/core/services";
import { ActivitybarItem, Slot } from "workbench/app/models/slot";

@Component({
  selector: "test-plugin-market",
  templateUrl: "./test-plugin-market.component.html",
  styleUrls: ["./test-plugin-market.component.scss"],
})
export class TestPluginMarketComponent {
  plugins = [
    {
      name: "场景编辑器",
      logo:
        "https://osd-alpha.tooqing.com/pixelpai/SpawnPointNode/5cc42f6417553727db1d2bba/1/5cc42f6417553727db1d2bba.png",
      description: "用于编辑游戏场景，可以放置。",
      author: "moJiXiang",
      id: "sceneEditor",
    },
    {
      name: "场景编辑器",
      logo:
        "https://osd-alpha.tooqing.com/pixelpai/SpawnPointNode/5cc42f6417553727db1d2bba/1/5cc42f6417553727db1d2bba.png",
      description: "用于编辑游戏场景，可以放置各种物件，人物，可以给物件添加脚本逻辑。",
      author: "moJiXiang",
      id: "sceneEditor",
    },
  ];
}
