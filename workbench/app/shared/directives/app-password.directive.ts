import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appPassword]",
})
export class AppPasswordDirective {
  private _show = false;

  constructor(private el: ElementRef) {
    this.setup();
  }

  setup() {
    const el = this.el.nativeElement;
    const parent = this.el.nativeElement.parentNode;
    const wrap = document.createElement("div");
    wrap.style.position = "relative";

    wrap.append(el);

    const icon = document.createElement("i");
    icon.setAttribute("class", "pi pi-eye");
    icon.style.position = "absolute";
    icon.style.right = "10px";
    icon.style.top = "12px";

    icon.addEventListener("click", (event) => {
      this.toggle(icon);
    });

    wrap.appendChild(icon);

    parent.append(wrap);
  }

  public toggle(icon: HTMLElement) {
    this._show = !this._show;

    if (this._show) {
      this.el.nativeElement.setAttribute("type", "text");
      icon.setAttribute("class", "pi pi-eye-slash");
    } else {
      this.el.nativeElement.setAttribute("type", "password");
      icon.setAttribute("class", "pi pi-eye");
    }
  }
}
