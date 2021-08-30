import {
  Component,
  ViewChild,
  ViewContainerRef,
  Input,
  AfterViewInit,
  NgModule,
  ɵcreateInjector as createInjector,
  Injector,
  ComponentFactoryResolver,
  Type,
  ComponentRef,
  OnDestroy,
} from "@angular/core";
import { QingCore, Event, RendererEvents, RendererFunctions } from "qing-core";

export class RenderderEvent extends Event {
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

  private componentRefs: ComponentRef<Component>[] = [];

  constructor(private resolver: ComponentFactoryResolver, private qingCore: QingCore) {}

  ngAfterViewInit() {
    // 当某个插槽动态插入组件，需要更新视图
    this.qingCore.On(RendererEvents.UPDATE_SLOT_VIEW, (event: RenderderEvent) => {
      if (event.placement === this.placement) {
        // https://segmentfault.com/a/1190000013972657
        // ExpressionChangedAfterItHasBeenCheckedError error
        Promise.resolve(null).then(() => {
          this.renderComponent(event.placement);
        });
      }
    });
  }

  renderComponent(placement: string) {
    this.componentAnchor.clear();

    const components = this.qingCore.Invoke(RendererFunctions.GET_PLACEMENT_COMPONENTS, placement);

    if (components && components.length > 0) {
      (components as Type<Component>[]).forEach((component) => {
        console.log(`>> Renderer Plugin ${component.name} in ${placement}`);
        const componentFactory = this.resolver.resolveComponentFactory(component);
        const ref = this.componentAnchor.createComponent(componentFactory);
        this.componentRefs.push(ref);
      });
    }
  }

  ngOnDestroy() {
    for (let ref of this.componentRefs) {
      ref.destroy();
    }
  }
}

@NgModule({
  declarations: [RendererComponent],
  exports: [RendererComponent],
  providers: [QingCore],
})
export class RendererModule {}
