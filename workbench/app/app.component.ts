import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Type,
  ViewChild,
  Compiler,
  Injector,
  ViewContainerRef,
} from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ContextService, QingWebApiService } from "./core/services";
// import { AuthState } from "./store";
import { DialogService } from "primeng/dynamicdialog";
import { ResmanagerComponent } from "workbench/app/pages/resmanager/resmanager.component";
import { SigninComponent, SigninPlugin } from "plugins/signin-plugin";

import { MenuComponent } from "workbench/app/slots/menu/menu.component";
import { ActivitybarComponent } from "workbench/app/slots/activitybar/activitybar.component";
import { DynamicInjector, PluginConfig } from "workbench/app/models";

import { LuapackageExplorerPlugin } from "plugins/luapackage-explorer-plugin";
import { WorkbenchMenuPlugin } from "plugins/workbench-menu-plugin";
import { MarketExplorerPlugin } from "plugins/market-explorer-plugin";

// test dynamic load plugin
import { ModuleLoader } from "./module-loader";

import * as angularAnimations from "@angular/animations";
import * as angularCdk from "@angular/cdk";
import * as angularCommon from "@angular/common";
import * as angularCompiler from "@angular/compiler";
import * as angularCore from "@angular/core";
import * as angularElements from "@angular/elements";
import * as angularForms from "@angular/forms";
import * as angularPlatformBrowser from "@angular/platform-browser";
import * as angularPlatformBrowserDynamic from "@angular/platform-browser-dynamic";
import * as angularRouter from "@angular/router";
import * as ngxsStore from "@ngxs/store";
import { HttpClient } from "@angular/common/http";
import * as qingWorkbench from "../public_api";

const loader = new ModuleLoader();

loader.register({
  "@angular/animations": angularAnimations,
  "@angular/cdk": angularCdk,
  "@angular/common": angularCommon,
  "@angular/compiler": angularCompiler,
  "@angular/core": angularCore,
  "@angular/elements": angularElements,
  "@angular/forms": angularForms,
  "@angular/platform-browser": angularPlatformBrowser,
  "@angular/platform-browser-dynamic": angularPlatformBrowserDynamic,
  "@angular/router": angularRouter,
  "@ngxs/store": ngxsStore,
  "qing-workbench": qingWorkbench,
});

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [DialogService],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("content", { read: ViewContainerRef }) content: ViewContainerRef;
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
  ];

  // @Select(AuthState.user) user$: Observable<IUser>;

  constructor(
    private http: HttpClient,
    private dialogService: DialogService,
    private contextService: ContextService,
    private compiler: Compiler,
    private injector: Injector
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

  ngOnInit() {}

  ngAfterViewInit() {
    this.contextService.createPuzzle();

    this.contextService.puzzle.registPuzzleSlot("workbenchMenu", this.workbenchMenu);

    this.contextService.puzzle.registPuzzleSlot("workbenchActivitybar", this.workbenchActivitybar);

    this.contextService.puzzle.registPuzzleSlot("workbenchExtensions", this.workbenchExtensions.nativeElement);

    // this.plugins.forEach((item) => {
    //   const { plugin } = item;
    //   this.contextService.puzzle.use(plugin);
    // });

    // this.registComponentEvent();

    this.loadPlugins();
  }

  private async loadPlugins() {
    const plugins = await this.http.get<PluginConfig[]>("plugins-repo/plugins.config.json").toPromise();
    plugins.forEach((widget) => this.createPlugin(widget));
  }

  private async createPlugin(plugin: PluginConfig) {
    const module = await loader.load(plugin.moduleBundlePath);
    console.log("🚀 ~ file: app.component.ts ~ line 153 ~ AppComponent ~ module", module);

    const moduleFactory = await this.compiler.compileModuleAsync(module[plugin.moduleName]);

    // 注入context
    const map = new WeakMap();
    map.set(ContextService, this.contextService);
    const moduleRef = moduleFactory.create(new DynamicInjector(this.injector, map));

    const componentProvider = moduleRef.injector.get(plugin.component);
    const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(componentProvider);

    this.content.createComponent(componentFactory);
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
