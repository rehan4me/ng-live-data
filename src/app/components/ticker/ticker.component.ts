import { Component, Input } from '@angular/core';
import { TickerData, TickerDataLabel } from 'src/app/model/ticker.data';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css']
})
export class TickerComponent {

  @Input() tickerdata: TickerData;
  tickerDataLabel = TickerDataLabel;

}
