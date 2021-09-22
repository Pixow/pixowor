import {
  Component,
  ViewChild,
  ViewContainerRef,
  Input,
  AfterViewInit,
  NgModule,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  Inject,
  Type,
} from "@angular/core";
import { PixoworCore, QEvent, UIEvents, Placements } from "pixowor-core";

export class RenderderEvent extends QEvent {
  placement: string;

  constructor(name: string, placement: string) {
    super(name);
    this.placement = placement;
  }
}

@Component({
  selector: "Renderer",
  template: `<ng-container #componentAnchor></ng-container>`,
})
export class RendererComponent implements AfterViewInit, OnDestroy {
  @Input() placement: string;

  @ViewChild("componentAnchor", { read: ViewContainerRef })
  componentAnchor!: ViewContainerRef;

  private ref: ComponentRef<Component> = null;

  constructor(
    private resolver: ComponentFactoryResolver,
    @Inject(PixoworCore) private pixoworCore: PixoworCore
  ) {}

  ngAfterViewInit() {
    // 当某个插槽动态插入组件，需要更新视图
    this.pixoworCore.workspace.on(UIEvents.INJECT_SLOT, (placement: Placements) => {
      if (placement === this.placement) {
        // https://segmentfault.com/a/1190000013972657
        // ExpressionChangedAfterItHasBeenCheckedError error
        Promise.resolve(null).then(() => {
          this.renderComponent(placement);
        });
      }
    });
  }

  renderComponent(placement: string) {
    this.componentAnchor.clear();

    const component = this.pixoworCore.workspace.getSlotComponent(placement);

    if (component) {
      console.log(`>> Renderer Plugin ${component.name} in ${placement}`);
      const componentFactory = this.resolver.resolveComponentFactory(component);
      this.ref = this.componentAnchor.createComponent(componentFactory);
    }
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.destroy();
    }
  }
}

@NgModule({
  declarations: [RendererComponent],
  exports: [RendererComponent],
  providers: [PixoworCore],
})
export class RendererModule {}
