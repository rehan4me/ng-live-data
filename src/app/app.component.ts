import { Component, ChangeDetectionStrategy, AfterViewInit, OnDestroy } from '@angular/core';
import { BitService } from './service/bit.service';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit, OnDestroy {

  isDefaultTicker = true;
  remoteData = this.bitService.messages.pipe(
    tap({
      error: error => console.log('Error:', error),
      complete: () => console.log('Remote Connection Closed')
    }),
    catchError(error => { throw error; })
  );

  constructor(public bitService: BitService) { }

  ngAfterViewInit() {
    this.bitService.connect();
    this.bitService.broadcastMessage({
      command: 'subscribe',
      channel: 1002
    });
  }

  ngOnDestroy() {
    this.bitService.closeSocketConnection();
  }
}
