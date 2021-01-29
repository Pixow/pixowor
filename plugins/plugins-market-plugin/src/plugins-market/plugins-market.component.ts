import { Component, Inject, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { ContextService } from "workbench/app/core/services/context.service";

@Component({
  selector: "plugins-market",
  templateUrl: "./plugins-market.component.html",
  styleUrls: ["./plugins-market.component.scss"],
})
export class PluginsMarketComponent implements OnInit {
  constructor(private store: Store, @Inject(ContextService) private context: ContextService) {}

  ngOnInit() {
    this.context.initial();

    this.context.sdk.game.listTemplateGames().then((data) => {
      console.log("-----------element editor use api------------");
      console.log(data);
    });
  }
}
