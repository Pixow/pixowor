import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Game } from "@workbench/app/models";
import { GameActions, GameState } from "@workbench/app/store";
import { OrderCondition } from "@workbench/types/typing";
import { Observable } from "rxjs";

@Component({
  selector: "game-manager",
  templateUrl: "./game-manager.component.html",
  styleUrls: ["./game-manager.component.scss"],
})
export class GameManagerComponent implements OnInit {
  public isLoadTemplateGames: boolean = false;
  @Select(GameState.templateGames) templateGames$: Observable<Game[]>;
  @Select(GameState.myGames) myGames$: Observable<Game[]>;
  @Select(GameState.downloadInfo) downloadInfo$: Observable<any>;

  templateGameOrderConditions = [
    {
      name: "按修改时间倒叙",
      field: "updatedAt",
      order: "desc",
    },
    {
      name: "按修改时间正序",
      field: "updatedAt",
      order: "asc",
    },
  ];

  myGameOrderConditions = [
    {
      name: "按修改时间倒序",
      field: "updatedAt",
      order: "desc",
    },
    {
      name: "按修改时间正序",
      field: "updatedAt",
      order: "asc",
    },
    {
      name: "按发布时间倒序",
      field: "createdAt",
      order: "desc",
    },
    {
      name: "按发布时间正序",
      filed: "createdAt",
      order: "asc",
    },
  ];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loadTemplateGames();
    this.loadMyGames();
  }

  public loadTemplateGames() {
    this.isLoadTemplateGames = true;
    this.store.dispatch(new GameActions.ListTemplateGames()).subscribe(() => {
      this.isLoadTemplateGames = false;
    });
  }

  public loadMyGames() {
    this.store.dispatch(new GameActions.ListMyGames());
  }

  public orderTemplateGames(orderCondition: OrderCondition) {
    this.store.dispatch(new GameActions.OrderTemplateGames(orderCondition));
  }

  public orderMyGames(orderCondition: OrderCondition) {
    this.store.dispatch(new GameActions.OrderMyGames(orderCondition));
  }
}
