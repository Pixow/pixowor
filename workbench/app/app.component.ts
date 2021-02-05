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
import * as angularCdkScrolling from "@angular/cdk/scrolling";
import * as angularCommon from "@angular/common";
import * as angularCompiler from "@angular/compiler";
import * as angularCore from "@angular/core";
import * as angularElements from "@angular/elements";
import * as angularForms from "@angular/forms";
import * as angularPlatformBrowser from "@angular/platform-browser";
import * as angularPlatformBrowserDynamic from "@angular/platform-browser-dynamic";
import * as angularRouter from "@angular/router";
import * as ngxsStore from "@ngxs/store";
import * as lodashEs from "lodash-es";
import { HttpClient } from "@angular/common/http";
import * as qingWorkbench from "../public_api";
import { MessageService } from "primeng/api";
import { SlotKeys } from "workbench/app/models";
import { StageComponent } from "workbench/app/slots/stage/stage.component";

const loader = new ModuleLoader();

loader.register({
  "@angular/animations": angularAnimations,
  "@angular/cdk": angularCdk,
  "@angular/cdk/scrolling": angularCdkScrolling,
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
  "lodash-es": lodashEs,
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

  // @Select(AuthState.user) user$: Observable<IUser>;

  constructor(
    private http: HttpClient,
    private dialogService: DialogService,
    private contextService: ContextService,
    private compiler: Compiler,
    private injector: Injector,
    private messageService: MessageService
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

    this.registSlotUi(plugin.id, module.config);
    console.log("🚀 ~ file: app.component.ts ~ line 153 ~ AppComponent ~ module", module);

    const moduleFactory = await this.compiler.compileModuleAsync(module[plugin.moduleName]);

    // 注入context
    const map = new WeakMap();
    map.set(ContextService, this.contextService);
    const moduleRef = moduleFactory.create(new DynamicInjector(this.injector, map));

    const componentProvider = moduleRef.injector.get(plugin.component);
    const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(componentProvider);

    this.contextService.registComponentFactory(plugin.id, componentFactory);
    // this.content.createComponent(componentFactory);
  }

  registSlotUi(pluginId, config) {
    for (const slotKey of Object.keys(config.contributes)) {
      const slot = this.contextService.puzzle.getPuzzleSlot(slotKey);

      if (!slot) {
        continue;
      }

      switch (slotKey) {
        case SlotKeys.WorkbenchActivitybar:
          const items = config.contributes[slotKey];
          slot.container.addItems(Object.assign(items, { id: pluginId }));
          break;
        case SlotKeys.WorkbenchStage:
          const componentName = config.contributes[slotKey];
          (slot.container as StageComponent).registComponent(componentName);
          break;
        default:
          break;
      }
    }
  }

  // registComponentEvent() {
  //   const workbenchMenu = document.querySelector("workbench-menu");
  //   workbenchMenu.addEventListener("openGameResManager", (event) => {
  //     console.log("open game resource manager");
  //     this.dialogService.open(ResmanagerComponent, {});
  //   });

  //   workbenchMenu.addEventListener("openSigninDialog", () => {
  //     this.dialogService.open(SigninComponent, {});
  //   });
  // }

  openDialog(componentType: Type<any>) {
    this.dialogService.open(componentType, {});
  }

  showMessage() {
    this.messageService.add({
      key: "globalMessage",
      severity: "success",
      detail: "sdxxxx",
    });
  }

  show() {
    this.contextService.success("sssss");
  }

  ngOnDestroy() {
    this._destroy.next(true);
    this._destroy.unsubscribe();
  }
}
