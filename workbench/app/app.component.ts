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
  ComponentFactoryResolver,
} from "@angular/core";
import { Subject } from "rxjs";
import * as path from "path";
import { ContextService, ElectronService } from "./core/services";
import { DialogService } from "primeng/dynamicdialog";

import { MenuComponent } from "workbench/app/slots/menu/menu.component";
import { ActivitybarComponent } from "workbench/app/slots/activitybar/activitybar.component";
import { DynamicInjector, PluginConfig } from "workbench/app/models";

// dynamic load plugin
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
import * as primengAccordion from "primeng/accordion";
import * as primengProgressbar from "primeng/progressbar";
import * as primengCheckbox from "primeng/checkbox";
import * as primengCarousel from "primeng/carousel";
import * as primengFileupload from "primeng/fileupload";
import * as primengMenu from "primeng/menu";
import * as primengTree from "primeng/tree";
import * as qingWorkbench from "../../public_api";
import * as gameCore from "@PixelPai/game-core";
import * as pixelpaiProto from "pixelpai_proto";
import * as netSocketPacket from "net-socket-packet";

import { MessageService } from "primeng/api";
import { SlotKeys } from "workbench/app/models";
import { StageComponent } from "workbench/app/slots/stage/stage.component";
import { PLUGINS_CONFIG_FILE } from "workbench/consts";
import { ExplorerComponent } from "workbench/app/slots/explorer/explorer.component";
import { ExtensionsComponent } from "workbench/app/slots/extensions/extensions.component";
import { StatusbarComponent } from "workbench/app/slots/statusbar/statusbar.component";
import { WORKBENCH_PUZZLE_BLOCK } from "workbench/puzzle";

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
  "primeng/accordion": primengAccordion,
  "primeng/progressbar": primengProgressbar,
  "primeng/checkbox": primengCheckbox,
  "primeng/carousel": primengCarousel,
  "primeng/fileupload": primengFileupload,
  "primeng/menu": primengMenu,
  "primeng/tree": primengTree,
  "@PixelPai/game-core": gameCore,
  pixelpai_proto: pixelpaiProto,
  "net-socket-packet": netSocketPacket,
});

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [DialogService],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("content", { read: ViewContainerRef }) content: ViewContainerRef;
  @ViewChild("dialog", { read: ViewContainerRef }) dialogRef: ViewContainerRef;
  private _destroy: Subject<boolean> = new Subject<boolean>();

  display = false;
  title = "";

  static instance: AppComponent;

  constructor(
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
    AppComponent.instance = this;
  }

  @ViewChild("workbenchMenu") workbenchMenu: ElementRef<MenuComponent>;
  @ViewChild("workbenchActivitybar") workbenchActivitybar: ElementRef<ActivitybarComponent>;
  @ViewChild("workbenchExplorer") workbenchExplorer: ElementRef<ExplorerComponent>;
  @ViewChild("workbenchStage") workbenchStage: ElementRef<StageComponent>;
  @ViewChild("workbenchExtensions") workbenchExtensions: ElementRef<ExtensionsComponent>;
  @ViewChild("workbenchStatusbar") workbenchStatusbar: ElementRef<StatusbarComponent>;

  ngOnInit() {}

  ngAfterViewInit() {
    this.contextService.createPuzzle();
    this.registPuzzleSlots();
    this.loadPlugins();
  }

  private registPuzzleSlots() {
    this.contextService.puzzle.registPuzzleSlot("workbenchMenu", this.workbenchMenu);

    this.contextService.puzzle.registPuzzleSlot("workbenchActivitybar", this.workbenchActivitybar);

    this.contextService.puzzle.registPuzzleSlot("workbenchExplorer", this.workbenchExplorer);

    this.contextService.puzzle.registPuzzleSlot("workbenchStage", this.workbenchStage);

    this.contextService.puzzle.registPuzzleSlot("workbenchExtensions", this.workbenchExtensions);

    this.contextService.puzzle.registPuzzleSlot("workbenchStatusbar", this.workbenchStatusbar);
  }

  public showDialog(title: string, componentName: string) {
    this.dialogRef.clear();
    const componentFactory = this.contextService.getComponentFactory(componentName);

    const componentRef = this.dialogRef.createComponent<Component>(componentFactory);

    this.title = title;
    this.display = true;
  }

  public destroyDialog() {
    this.dialogRef.clear();
    this.display = false;
  }

  private loadPlugins() {
    // TODO: 从软件安装目录读取插件配置文件
    this.contextService.getConfigData(PLUGINS_CONFIG_FILE, ({ data }) => {
      const plugins = JSON.parse(data);

      for (let plugin of plugins) {
        console.log("plugin: ", plugin);
        this.createPlugin(plugin);
      }
    });
  }

  public async createPlugin(plugin: PluginConfig) {
    const module = await loader.load(plugin.moduleBundlePath);
    const config = module.config;

    this.registSlotUi(config.id, config);
    console.log("🚀 ~ file: app.component.ts ~ line 153 ~ AppComponent ~ module", module);

    const moduleFactory = await this.compiler.compileModuleAsync(module[config.moduleName]);

    // 注入context
    const map = new WeakMap();
    map.set(ContextService, this.contextService);
    const moduleRef = moduleFactory.create(new DynamicInjector(this.injector, map));

    // 注册 entryComponent
    const componentProvider = moduleRef.injector.get(config.entryComponent);
    const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(
      componentProvider
    );
    this.contextService.registEntryComponent(config.id, componentFactory);

    // 注册 components
    for (const componentName of config.components) {
      const componentProvider = moduleRef.injector.get(componentName);
      const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(
        componentProvider
      );
      this.contextService.registComponentFactory(componentName, componentFactory);
    }

    // 执行plugin active 方法
    if (module.active) {
      module.active(this.contextService);
    }
  }

  registSlotUi(pluginId, config) {
    for (const slotKey of Object.keys(config.contributes)) {
      const slot = this.contextService.puzzle.getPuzzleSlot(slotKey as WORKBENCH_PUZZLE_BLOCK);
      const slotConfig = config.contributes[slotKey];

      if (!slot) {
        continue;
      }

      switch (slotKey) {
        case SlotKeys.WorkbenchActivitybar:
          const item = slotConfig;
          (slot.container as ActivitybarComponent).addItems(Object.assign(item, { id: pluginId }));
          break;
        case SlotKeys.WorkbenchStage || SlotKeys.WorkbenchExplorer:
          const { componentName } = slotConfig;
          (slot.container as StageComponent).registComponent(componentName);
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

  // showMessage() {
  //   this.messageService.add({
  //     key: "globalMessage",
  //     severity: "success",
  //     detail: "sdxxxx",
  //   });
  // }

  // show() {
  //   this.contextService.success("sssss");
  // }

  // addItem() {
  //   console.log(this.contextService.puzzle.getPuzzleSlot(WORKBENCH_PUZZLE_BLOCK.WORKBENCH_MENU));
  //   this.contextService.puzzle
  //     .getPuzzleSlot(WORKBENCH_PUZZLE_BLOCK.WORKBENCH_MENU)
  //     .container.addMenu({ label: "ceshi" });
  // }

  ngOnDestroy() {
    this._destroy.next(true);
    this._destroy.unsubscribe();
  }
}
