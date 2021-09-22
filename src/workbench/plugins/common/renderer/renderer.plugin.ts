import { Component, NgModule, Type } from "@angular/core";
import { PixoworCore, Plugin } from "pixowor-core";
import { RenderderEvent } from "./renderer";
import manifest from "./manifest.json";

export type ComponentUrl = string;

export class RendererPlugin extends Plugin {
  private components = new Map<string, Component>();

  private componentsMap = new Map<string, Array<Type<Component>>>();

  constructor(pixoworCore: PixoworCore) {
    super(pixoworCore, manifest);

    // this.pixoworCore.Bind(RendererFunctions.REGIST_COMPONENT, this.registComponent.bind(this));
    // this.pixoworCore.Bind(RendererFunctions.GET_COMPONENT, this.getComponent.bind(this));

    // this.pixoworCore.Bind(
    //   RendererFunctions.REGIST_PLACEMENT_COMPONENTS,
    //   this.registPlacementComponents.bind(this)
    // );

    // this.pixoworCore.Bind(
    //   RendererFunctions.GET_PLACEMENT_COMPONENTS,
    //   this.getPlacementComponents.bind(this)
    // );
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
    this.colorLog(`${this.name} activate, Pid: ${this.pid}`);
  }

  deactivate() {}
}
