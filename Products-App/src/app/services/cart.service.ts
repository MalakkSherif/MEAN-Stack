import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Product[] = [];
  private cartItemsSubject = new BehaviorSubject<Product[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(product: Product) {
    this.items.push(product);
    this.cartItemsSubject.next(this.items);
  }

  removeFromCart(productId: number) {
    this.items = this.items.filter(p => p.id !== productId);
    this.cartItemsSubject.next(this.items);
  }

  clearCart() {
    this.items = [];
    this.cartItemsSubject.next(this.items);
  }

  getItems() {
    return this.items;
  }
}
