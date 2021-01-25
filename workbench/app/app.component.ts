import * as path from "path";
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
import { ContextService, LazyLoaderService, QingWebApiService } from "./core/services";
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

import * as angularCore from "@angular/core";
import * as angularCommon from "@angular/common";
import * as angularCommonHttp from "@angular/common/http";
import * as angularForms from "@angular/forms";
import * as angularAnimations from "@angular/animations";
import * as angularPlatformBrowser from "@angular/platform-browser";
import * as angularPlatformBrowserDynamic from "@angular/platform-browser-dynamic";

const loader = new ModuleLoader();

loader.register({
  "@angular/core": angularCore,
  "@angular/common": angularCommon,
  "@angular/common/http": angularCommonHttp,
  "@angular/forms": angularForms,
  "@angular/animations": angularAnimations,
  "@angular/platform-browser": angularPlatformBrowser,
  "@angular/platform-browser-dynamic": angularPlatformBrowserDynamic,
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
    private qingWebApiService: QingWebApiService,
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

    // this.plugins.forEach((item) => {
    //   const { plugin } = item;
    //   this.contextService.puzzle.use(plugin);
    // });

    // this.registComponentEvent();

    this.loadPlugins();
  }

  private async loadPlugins() {
    const plugins = await this.contextService.getPluginConfigs().toPromise();
    plugins.forEach((widget) => this.createPlugin(widget));
  }

  private async createPlugin(plugin: PluginConfig) {
    const module = await loader.load(plugin.moduleBundlePath);

    const moduleFactory = await this.compiler.compileModuleAsync(module[plugin.moduleName]);

    const map = new WeakMap();
    map.set(ContextService, this.contextService);
    const moduleRef = moduleFactory.create(new DynamicInjector(this.injector, map));

    const componentProvider = moduleRef.injector.get(plugin.name);
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
