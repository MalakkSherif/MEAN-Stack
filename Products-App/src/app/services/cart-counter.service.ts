import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartCounterService {

  private cartItemCount = new BehaviorSubject<number>(0);

    constructor() { }

  getCartItemCount(): Observable<number>{
    return this.cartItemCount.asObservable();
  }

  updateCounter(newValue : number){
    this.cartItemCount.next(newValue)
  }

}
