import { Component, ContentChild, TemplateRef, Input } from '@angular/core';
import { CustomTickerDirective } from 'src/app/directive/custom.ticker.directive';
import { TickerData, TickerDataLabel } from 'src/app/model/ticker.data';

@Component({
  selector: 'app-custom-ticker',
  templateUrl: './custom-ticker.component.html',
  styleUrls: ['./custom-ticker.component.css']
})
export class CustomTickerComponent {

  @ContentChild(CustomTickerDirective, {static: true, read: TemplateRef}) customTickerTpl: TemplateRef<any>;

  @Input() tickerdata = [];
  @Input() tickerDataLabel = TickerDataLabel;
  constructor() { }

  get customTickerTplContext(): object {
    return {
      tickerdata: this.tickerdata,
      tickerDataLabel: this.tickerDataLabel
    };
  }
}
