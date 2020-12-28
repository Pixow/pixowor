import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[hoverActive]",
})
export class HoverActiveDirective {
  constructor(private el: ElementRef) {}

  @HostListener("mouseenter")
  avtive() {
    const _iconElement = this.el.nativeElement.children[0];
    _iconElement.classList.add("active");
  }

  @HostListener("mouseleave") deactive() {
    const _iconElement = this.el.nativeElement.children[0];
    _iconElement.classList.remove("active");
  }
}
