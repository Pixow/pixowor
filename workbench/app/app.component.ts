import * as path from "path";
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Type, ViewChild } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ContextService, LazyLoaderService, QingWebApiService } from "./core/services";
// import { AuthState } from "./store";
import { DialogService } from "primeng/dynamicdialog";
import { ResmanagerComponent } from "workbench/app/pages/resmanager/resmanager.component";
import { SigninComponent, SigninPlugin } from "plugins/signin-plugin";

import { MenuComponent } from "workbench/app/slots/menu/menu.component";
import { ActivitybarComponent } from "workbench/app/slots/activitybar/activitybar.component";

import { LuapackageExplorerPlugin } from "plugins/luapackage-explorer-plugin";
import { WorkbenchMenuPlugin } from "plugins/workbench-menu-plugin";
import { MarketExplorerPlugin } from "plugins/market-explorer-plugin";

// test dynamic load plugin
import { ElementEditorPlugin } from "@qing/element-editor-plugin";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [DialogService],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  private _destroy: Subject<boolean> = new Subject<boolean>();

  private plugins = [
    // {
    //   name: "scene-tree-plugin",
    //   plugin: SceneTreePlugin,
    // },
    {
      plugin: SigninPlugin,
    },
    {
      name: "workbench-menu-plugin",
      plugin: WorkbenchMenuPlugin,
    },
    {
      name: "market-explorer-plugin",
      plugin: MarketExplorerPlugin,
    },
    {
      name: "luapackage-explorer-plugin",
      plugin: LuapackageExplorerPlugin,
    },
    {
      plugin: ElementEditorPlugin,
    },
  ];

  // @Select(AuthState.user) user$: Observable<IUser>;

  constructor(
    private qingWebApiService: QingWebApiService,
    private dialogService: DialogService,
    private contextService: ContextService
  ) {
    // this.user$.pipe(takeUntil(this._destroy)).subscribe((user) => {
    //   if (user) {
    //     // 设置Axios Interceptors
    //     this.qingWebApiService.setInterceptors(user);
    //   }
    // });
  }

  @ViewChild("workbenchMenu") workbenchMenu: ElementRef<MenuComponent>;
  @ViewChild("workbenchActivitybar") workbenchActivitybar: ElementRef<ActivitybarComponent>;
  @ViewChild("workbenchExplorer") workbenchExplorer: ElementRef;
  @ViewChild("workbenchEditor") workbenchEditor: ElementRef;
  @ViewChild("workbenchExtensions") workbenchExtensions: ElementRef;
  @ViewChild("workbenchStatusbar") workbenchStatusbar: ElementRef;

  ngOnInit() {
    // this.lazyLoaderService.loadModule(() => {
    //   return import("plugins/scene-tree-plugin/module").then((m) => m.SceneTreePluginModule);
    // });
    // this.lazyLoaderService.loadModule(() => {
    //   return import("plugins/signin-plugin/module").then((m) => m.SigninPluginModule);
    // });
  }

  ngAfterViewInit() {
    this.contextService.createPuzzle();

    this.contextService.puzzle.registPuzzleSlot("workbenchMenu", this.workbenchMenu);

    this.contextService.puzzle.registPuzzleSlot("workbenchActivitybar", this.workbenchActivitybar);

    this.contextService.puzzle.registPuzzleSlot("workbenchExtensions", this.workbenchExtensions.nativeElement);

    this.plugins.forEach((item) => {
      const { plugin } = item;
      this.contextService.puzzle.use(plugin);
    });

    // this.registComponentEvent();
  }

  registComponentEvent() {
    const workbenchMenu = document.querySelector("workbench-menu");
    workbenchMenu.addEventListener("openGameResManager", (event) => {
      console.log("open game resource manager");
      this.dialogService.open(ResmanagerComponent, {});
    });

    workbenchMenu.addEventListener("openSigninDialog", () => {
      this.dialogService.open(SigninComponent, {});
    });
  }

  openDialog(componentType: Type<any>) {
    this.dialogService.open(componentType, {});
  }

  ngOnDestroy() {
    this._destroy.next(true);
    this._destroy.unsubscribe();
  }
}
