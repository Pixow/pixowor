import { Component, NgModule, Type } from "@angular/core";
import { Inject } from "typedi";
import { QingCore } from "qing-core";
import { RenderderEvent, RendererFunctions } from "./renderer.component";

export type ComponentUrl = string;

export class RendererPlugin extends Plugin {
  @Inject() qingCore: QingCore;
  public title = "渲染插件";
  private dialogComponentMap = new Map<string, Component>();
  private componentsMap = new Map<string, Array<Type<Component>>>();

  getPluginName() {
    return "Renderer@1.0.0";
  }

  getDependencies() {
    return [];
  }

  addToComponentsMap(placement: string, component: Type<Component>) {
    let components = this.componentsMap.get(placement);
    if (!components) {
      components = [component];
    } else {
      components.push(component);
    }
    this.componentsMap.set(placement, components);

    this.qingCore.Emit(new RenderderEvent(RendererFunctions.RENDER_COMPONENTS, placement));
  }

  removeFromcomponentsMap(placement: string, module: NgModule) {
    let array = this.componentsMap.get(placement);
    if (array) {
      array.splice(
        array.findIndex((item) => item === module),
        1
      );
    }
    this.qingCore.dispatchEvent(new RenderderEvent(RendererFunctions.RENDER_COMPONENTS, placement));
  }

  addToRenderOnceComponent(placement: string, component: Type<Component>) {
    this.componentsMap.set(placement, [component]);

    this.qingCore.dispatchEvent(
      new RenderderEvent(RendererFunctions.RENDERER_COMPONENT, placement)
    );
  }

  getComponentsInPlacement(placement: string) {
    const componentArray = this.componentsMap.get(placement);
    if (!componentArray) return [];

    return componentArray;
  }

  addToDialogComponentMap(componentName: string, component: Component) {
    this.dialogComponentMap.set(componentName, component);
  }

  getDialogComponent(componentName: string): Component | undefined {
    return this.dialogComponentMap.get(componentName);
  }

  activate() {
    this.qingCore.Bind(RendererFunctions.ADD, this.addToComponentsMap.bind(this));

    this.qingCore.addFunction(
      RendererFunctions.RENDERER_ONCE,
      this.addToRenderOnceComponent.bind(this)
    );

    this.qingCore.addFunction(
      RendererFunctions.RENDERER_REGIST_DIALOG_COMPONENT,
      this.addToDialogComponentMap.bind(this)
    );

    this.qingCore.addFunction(
      RendererFunctions.RENDERER_GET_DIALOG_COMPONENT,
      this.getDialogComponent.bind(this)
    );

    this.qingCore.addFunction(
      RendererFunctions.RENDERER_REMOVE,
      this.removeFromcomponentsMap.bind(this)
    );

    this.qingCore.addFunction(
      RendererFunctions.RENDERER_GET_COMPONENTS_IN_PLACEMENT,
      this.getComponentsInPlacement.bind(this)
    );
  }

  deactivate() {
    this.qingCore.removeFunction(RendererFunctions.RENDERER_ADD);
    this.qingCore.removeFunction(RendererFunctions.RENDERER_ONCE);

    this.qingCore.removeFunction(RendererFunctions.RENDERER_REGIST_DIALOG_COMPONENT);
    this.qingCore.removeFunction(RendererFunctions.RENDERER_GET_DIALOG_COMPONENT);
    this.qingCore.removeFunction(RendererFunctions.RENDERER_REMOVE);
    this.qingCore.removeFunction(RendererFunctions.RENDERER_GET_COMPONENTS_IN_PLACEMENT);
  }
}
