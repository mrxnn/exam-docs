import { Directive, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[lazyload]'
})
export class LazyLoadDirective implements AfterViewInit {
  @Output() lazyload = new EventEmitter();
  private _io?: IntersectionObserver;

  constructor(private _element: ElementRef) { }

  ngAfterViewInit() {
    this._io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (this.isIntersecting(entry)) {
          this.lazyload.emit();
          this._io.unobserve(this._element.nativeElement);
          this._io.disconnect();
        }
      });
    });

    this._io.observe(this._element.nativeElement);
  }

  isIntersecting(entry: IntersectionObserverEntry) {
    return entry.isIntersecting && entry.target === this._element.nativeElement;
  }
}
