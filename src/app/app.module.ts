import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TickerComponent } from './components/ticker/ticker.component';
import { MarketDirectionDirective } from './directive/market.direction.directive';
import { CustomTickerComponent } from './components/custom-ticker/custom-ticker.component';
import { CustomTickerDirective } from './directive/custom.ticker.directive';

@NgModule({
  declarations: [
    AppComponent,
    TickerComponent,
    MarketDirectionDirective,
    CustomTickerComponent,
    CustomTickerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
