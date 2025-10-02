import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter = new BehaviorSubject<number>(0)

  constructor() { }

  getCounter() : Observable<number>{
    return this.counter.asObservable()
  }

  updateCounter(newValue : number){
    this.counter.next(newValue)
  }
}
