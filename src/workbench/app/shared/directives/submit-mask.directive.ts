import { Directive, ElementRef, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { Observable } from "rxjs";

@Directive({
  selector: "[submitMask]",
})
export class SubmitMaskDirective implements OnInit {
  private _mask: HTMLDivElement;

  constructor(private el: ElementRef, private view: ViewContainerRef, private templateRef: TemplateRef<any>) {}

  ngOnInit() {
    this.view.createEmbeddedView(this.templateRef);
  }

  @Input()
  set submitMask(isSubmitted: Observable<boolean>) {
    isSubmitted.subscribe((value) => {
      console.log("🚀 ~ file: submit-mask.directive.ts ~ line 15 ~ SubmitMaskDirective ~ value", value);
      if (value) {
        this.setup();
      } else {
        this.remove();
      }
    });
  }

  setup() {
    const el = this.el.nativeElement;
    el.style.position = "relative";
    this._mask = document.createElement("div");
    this._mask.style.width = "100%";
    this._mask.style.height = "100%";
    this._mask.style.position = "absolute";
    this._mask.style.backgroundColor = "#ffffff";
    this._mask.style.opacity = "0.5";
    this._mask.style.zIndex = "10";

    this._mask.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    el.append(this._mask);
  }

  public remove() {
    if (this._mask) {
      this._mask.remove();
    }
  }
}
