import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable()
export class WebsocketService {
  constructor() { }

  private subject: Subject<MessageEvent>;

  public connect(url: string): Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log('Successfully connected: ' + url + this.subject);
    } else {
      console.log('not Successfully: ' + url);
    }
    return this.subject;
  }

  private create(url): Subject<MessageEvent> {
    const ws = new WebSocket(url);

    const observable = new Observable((obs: Observer<MessageEvent>) => {
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      return ws.close.bind(ws);
    });
    const observer = {
      next: (data: Object) => {
        console.log(data);
        if (ws.readyState === WebSocket.OPEN) {
          console.log(data);
          // ws.send(JSON.stringify(data));
        }
      }
    };
    // tslint:disable-next-line: deprecation
    return Subject.create(observer, observable);
  }
}
