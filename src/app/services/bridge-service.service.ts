import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BridgeService {
  private countShare = new BehaviorSubject(0);
  currentCountNumber = this.countShare.asObservable();

  constructor() { }

  fetchCurrentCountNumber(count: number) {
    this.countShare.next(count);
  }
}
