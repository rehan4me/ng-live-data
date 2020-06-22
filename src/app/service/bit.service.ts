import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Subject, EMPTY, Observable, timer } from 'rxjs';
import { tap, catchError, switchAll, retryWhen, delayWhen } from 'rxjs/operators';
import { TickerData } from '../model/ticker.data';

@Injectable({
  providedIn: 'root'
})
export class BitService {

  private webSocket: WebSocketSubject<any>;
  private msgSubject = new Subject();
  private WEB_SOCKET_ENDPOINT = 'wss://api2.poloniex.com';
  public messages = this.msgSubject.pipe(switchAll(), catchError(e => { throw e; }));

  public connect(reconnect: boolean = false): void {
    if (!this.webSocket || this.webSocket.closed) {
      this.webSocket = this.getConnection();
      const msg = this.webSocket.pipe(reconnect ? this.reconnect : o => o,
        tap({
          error: error => console.log(error)
        }),
        catchError(() => EMPTY)
      );
      this.msgSubject.next(msg);
    }
  }

  private getConnection() {
    return webSocket({
      url: this.WEB_SOCKET_ENDPOINT,
      openObserver: {
        next: () => {
          console.log('Connected with web socket');
        }
      },
      closeObserver: {
        next: () => {
          console.log('Connection closed');
          this.webSocket = undefined;
          this.connect(true);
        }
      }
    });
  }

  private reconnect(o: Observable<any>): Observable<any> {
    return o.pipe(retryWhen(errors => errors.pipe(tap(val => console.log('Trying to reconnect', val)),
      delayWhen(_ => timer(2000)))));
  }

  public broadcastMessage(msg: any): void {
    this.webSocket.next(msg);
  }

  public closeSocketConnection(): void {
    this.webSocket.complete();
    this.webSocket = undefined;
  }

}
