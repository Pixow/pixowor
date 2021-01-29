import { ElementRef } from "@angular/core";
export declare class AppPasswordDirective {
    private el;
    private _show;
    constructor(el: ElementRef);
    setup(): void;
    toggle(icon: HTMLElement): void;
}
