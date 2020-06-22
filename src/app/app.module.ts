import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TickerComponent } from './components/ticker/ticker.component';
import { MarketDirectionDirective } from './directive/market.direction.directive';

@NgModule({
  declarations: [
    AppComponent,
    TickerComponent,
    MarketDirectionDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
