import {
  Component,
  ViewChild,
  ViewContainerRef,
  Input,
  AfterViewInit,
  NgModule,
  OnInit,
  Directive,
  ɵcreateInjector as createInjector,
  Injector,
  Inject,
  ComponentFactoryResolver,
  Type,
  ComponentRef,
  OnDestroy,
} from "@angular/core";
import { Service } from "typedi";
import { QingCore, Event } from "qing-core";

export class RenderderEvent extends Event {
  placement: string;

  constructor(name: string, placement: string) {
    super(name);
    this.placement = placement;
  }
}

export enum RendererFunctions {
  ADD = "add",
  ONCE = "once",
  REGIST_DIALOG_COMPONENT = "registDialogComponent",
  GET_DIALOG_COMPONENT = "getDialogComponent",
  REMOVE = "remove",
  GET_COMPONENTS_IN_PLACEMENT = "getComponentsInPlacement",
  RENDER_COMPONENTS = "renderComponent",
}

@Component({
  selector: "Renderer",
  template: `<ng-container #componentAnchor></ng-container>`,
})
export class RendererComponent implements AfterViewInit, OnDestroy {
  @Input() placement!: string;

  @ViewChild("componentAnchor", { read: ViewContainerRef })
  componentAnchor!: ViewContainerRef;

  //   private pluginStore = usePluginStore();
  @Service() qingCore: QingCore;

  private componentRefs: ComponentRef<Component>[] = [];

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    this.qingCore.On(RendererFunctions.RENDER_COMPONENTS, (event: RenderderEvent) => {
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
    // const components = this.pluginStore.execFunction(
    //   FunctionNames.RENDERER_GET_COMPONENTS_IN_PLACEMENT,
    //   placement
    // );

    const components = this.qingCore.Invoke(
      RendererFunctions.GET_COMPONENTS_IN_PLACEMENT,
      placement
    );

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
})
export class RendererModule {}
