import { Component, Input } from '@angular/core';
import { Product } from '../types/product';
import { CurrencyPipe } from '@angular/common';
import { StarsPipe } from '../pipes/stars.pipe';
import { RouterLink } from '@angular/router';
import { CartCounterService } from '../services/cart-counter.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, StarsPipe, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() productItem! : Product;

  counter? : number;

  constructor(private cartCounterService: CartCounterService, private cartService : CartService) { }

  ngOnInit(){
    this.cartCounterService.getCartItemCount().subscribe(count => {
      this.counter = count;
    });
  }

  handleAddToCart(){
    this.cartCounterService.updateCounter(this.counter! + 1);
    this.cartService.addToCart(this.productItem);
  }

}
