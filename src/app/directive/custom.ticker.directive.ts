import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCustomTicker]'
})
export class CustomTickerDirective {

  constructor(public templateRef: TemplateRef<any>) { }

}
