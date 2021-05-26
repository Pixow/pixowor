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
  NgZone,
} from "@angular/core";
import { Subject } from "rxjs";
import { ContextService } from "./core/services";
import { DialogService } from "primeng/dynamicdialog";

import { ActivitybarComponent } from "workbench/app/slots/activitybar/activitybar.component";

import { StageComponent } from "workbench/app/slots/stage/stage.component";
import { ExplorerComponent } from "workbench/app/slots/explorer/explorer.component";
import { ExtensionsComponent } from "workbench/app/slots/extensions/extensions.component";
import { StatusbarComponent } from "workbench/app/slots/statusbar/statusbar.component";
import { PluginStore, createPluginStore, Event, RendererPlugin } from "angular-pluggable";
import { AlertPlugin } from "plugins/alert.plugin";
import { HeaderPlugin } from "plugins/header/header.plugin";
import { MenuPlugin } from "plugins/menu/menu.plugin";

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
  private pluginStore: PluginStore = createPluginStore();

  display = false;
  title = "";

  constructor(
    private dialogService: DialogService,
    private contextService: ContextService,
    private compiler: Compiler,
    private injector: Injector,
    private ngZone: NgZone
  ) {}

  @ViewChild("workbenchActivitybar") workbenchActivitybar: ElementRef<ActivitybarComponent>;
  @ViewChild("workbenchExplorer") workbenchExplorer: ElementRef<ExplorerComponent>;
  @ViewChild("workbenchStage") workbenchStage: ElementRef<StageComponent>;
  @ViewChild("workbenchExtensions") workbenchExtensions: ElementRef<ExtensionsComponent>;
  @ViewChild("workbenchStatusbar") workbenchStatusbar: ElementRef<StatusbarComponent>;

  ngOnInit() {}

  ngAfterViewInit() {
    this.pluginStore.install(new RendererPlugin());
    this.pluginStore.install(new AlertPlugin());
    this.pluginStore.install(new HeaderPlugin());
    this.pluginStore.install(new MenuPlugin());
  }

  public handleClick() {
    this.pluginStore.dispatchEvent(new Event("Alert"));
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

  registEvents(event) {}

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
