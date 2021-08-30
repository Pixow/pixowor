import { Component, NgModule, Type } from "@angular/core";
import { Inject } from "typedi";
import { QingCore, Plugin, RendererFunctions } from "qing-core";
import { RenderderEvent } from "./renderer";

export type ComponentUrl = string;

export class RendererPlugin extends Plugin {
  name = "Renderer";
  version = "1.0.0";
  description = "渲染插件";

  private components = new Map<string, Component>();

  private componentsMap = new Map<string, Array<Type<Component>>>();

  constructor(private qingCore: QingCore) {
    super();
  }

  getDependencies() {
    return [];
  }

  registComponent(componentName: string, component: Component) {
    this.components.set(componentName, component);
  }

  getComponent(componentName: string): Component {
    return this.components.get(componentName);
  }

  registPlacementComponents(placement: string, component: Type<Component>) {
    let components = this.componentsMap.get(placement);
    if (!components) {
      components = [component];
    } else {
      components.push(component);
    }
    this.componentsMap.set(placement, components);
  }

  removeFromcomponentsMap(placement: string, module: NgModule) {
    let array = this.componentsMap.get(placement);
    if (array) {
      array.splice(
        array.findIndex((item) => item === module),
        1
      );
    }
  }

  getPlacementComponents(placement: string) {
    return this.componentsMap.get(placement);
  }

  activate() {
    this.qingCore.Bind(RendererFunctions.REGIST_COMPONENT, this.registComponent.bind(this));
    this.qingCore.Bind(RendererFunctions.GET_COMPONENT, this.getComponent.bind(this));

    this.qingCore.Bind(
      RendererFunctions.REGIST_PLACEMENT_COMPONENTS,
      this.registPlacementComponents.bind(this)
    );

    this.qingCore.Bind(
      RendererFunctions.GET_PLACEMENT_COMPONENTS,
      this.getPlacementComponents.bind(this)
    );
  }

  deactivate() {
    this.qingCore.UnBind(RendererFunctions.REGIST_COMPONENT);
    this.qingCore.UnBind(RendererFunctions.REGIST_PLACEMENT_COMPONENTS);
    this.qingCore.UnBind(RendererFunctions.GET_PLACEMENT_COMPONENTS);
  }
}
