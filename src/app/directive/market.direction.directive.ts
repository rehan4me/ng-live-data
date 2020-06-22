import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarketDirection]'
})
export class MarketDirectionDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    const value = this.element.nativeElement.innerHTML.replace(/,/g, '');
    if (Number(value) > 0) {
      this.renderer.addClass(this.element.nativeElement, 'upArrow');
    }
    if (Number(value) < 0) {
      this.renderer.addClass(this.element.nativeElement, 'downArrow');
    }
  }

}
