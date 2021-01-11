import * as path from "path";
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Select } from "@ngxs/store";
import { SceneTreePlugin } from "plugins/scene-tree-plugin";
import { WorkbenchMenuPlugin } from "plugins/workbench-menu-plugin";
import { Puzzle, PuzzleBlock } from "glue/puzzle";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { LazyLoaderService, QingWebApiService } from "./core/services";
import { IUser } from "./models";
import { AuthState } from "./store";
import { DialogService } from "primeng/dynamicdialog";
import { ResmanagerComponent } from "workbench/app/pages/resmanager/resmanager.component";
import { SigninComponent } from "plugins/signin-plugin";
import { ActivitybarPlugin } from "plugins/activitybar-plugin";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [DialogService],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  private _destroy: Subject<boolean> = new Subject<boolean>();

  private pluginList = [
    {
      name: "scene-tree-plugin",
      plugin: SceneTreePlugin,
    },
    {
      name: "workbench-menu-plugin",
      plugin: WorkbenchMenuPlugin,
    },
    {
      name: "activitybar-plugin",
      plugin: ActivitybarPlugin,
    },
  ];

  @Select(AuthState.user) user$: Observable<IUser>;

  constructor(
    private qingWebApiService: QingWebApiService,
    private router: Router,
    private lazyLoaderService: LazyLoaderService,
    private dialogService: DialogService
  ) {
    this.user$.pipe(takeUntil(this._destroy)).subscribe((user) => {
      if (user) {
        // 设置Axios Interceptors
        this.qingWebApiService.setInterceptors(user);
      }
    });
  }

  @ViewChild("workbenchMenu") workbenchMenu: ElementRef;
  @ViewChild("workbenchActivitybar") workbenchActivitybar: ElementRef;
  @ViewChild("workbenchExplorer") workbenchExplorer: ElementRef;
  @ViewChild("workbenchEditor") workbenchEditor: ElementRef;
  @ViewChild("workbenchExtensions") workbenchExtensions: ElementRef;
  @ViewChild("workbenchStatusbar") workbenchStatusbar: ElementRef;

  ngOnInit() {
    this.lazyLoaderService.loadModule(() => {
      return import("plugins/workbench-menu-plugin/module").then((m) => m.WorkbenchMenuPluginModule);
    });

    this.lazyLoaderService.loadModule(() => {
      return import("plugins/scene-tree-plugin/module").then((m) => m.SceneTreePluginModule);
    });

    // this.lazyLoaderService.loadModule(() => {
    //   return import("plugins/signin-plugin/module").then((m) => m.SigninPluginModule);
    // });

    this.lazyLoaderService.loadModule(() => {
      return import("plugins/activitybar-plugin/module").then((m) => m.ActivitybarPluginModule);
    });
  }

  ngAfterViewInit() {
    const puzzle = new Puzzle();
    const workbenchMenu = new PuzzleBlock("workbenchMenu", this.workbenchMenu.nativeElement);
    puzzle.registPuzzleBlock(workbenchMenu);

    const workbenchExtensions = new PuzzleBlock("workbenchExtensions", this.workbenchExtensions.nativeElement);
    puzzle.registPuzzleBlock(workbenchExtensions);

    const workbenchActivitybar = new PuzzleBlock("workbenchActivitybar", this.workbenchActivitybar.nativeElement);
    puzzle.registPuzzleBlock(workbenchActivitybar);

    this.pluginList.forEach((item) => {
      const { name, plugin } = item;
      const block = puzzle.getPuzzleBlock(plugin.contributes);
      block.use(plugin);
      block.triggerPluginRender(plugin.renderTrigger);
    });

    // puzzle.use(ActivitybarPlugin);
    // puzzle.triggerPluginRender(ActivitybarPlugin.renderTrigger);
    // puzzle.use(FileSystemPlugin);
    // puzzle.triggerPluginRender(FileSystemPlugin.renderTrigger);
    // puzzle.use(DebugPlugin);
    // puzzle.triggerPluginRender(DebugPlugin.renderTrigger);

    this.registComponentEvent();
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

  ngOnDestroy() {
    this._destroy.next(true);
    this._destroy.unsubscribe();
  }
}
