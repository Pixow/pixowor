import { Component, Type } from "@angular/core";
export interface Props {
    [key: string]: unknown;
}
export interface ElementProps extends Props {
    component: Type<Component>;
    props: Props;
}
export interface AngularComponentData<P extends Props = {}, T extends Component = any> {
    render?: "angular" | string;
    component: Type<T>;
    props?: P;
}
