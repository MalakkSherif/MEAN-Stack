import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { CartCounterService } from '../services/cart-counter.service';
import { Product } from '../types/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {


  productItem!: Product;
  counter?: number;
  quantity: number = 1;
  total: number = 0;
  cartItems: Product[] = [];

  @Input() productId!: string;




  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private cartCounterService: CartCounterService,
    private cartService: CartService) {

  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('productId');
    this.productsService.getProductById(id!).subscribe((data) => {
      this.productItem = data;
    });


    this.cartCounterService.getCartItemCount().subscribe(count => {
      this.counter = count;
    });

    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.total = this.cartItems.reduce((sum, item) => sum + item.price, 0);
    });
  }

  increaseQuantity() {
    this.quantity += 1;
    this.total = this.productItem.price * this.quantity;
    this.cartCounterService.updateCounter(this.counter! + 1);
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity -= 1;
      this.total = this.productItem.price * this.quantity;
      this.cartCounterService.updateCounter(this.counter! - 1);
    }
  }

  removeItem() {
    this.cartCounterService.updateCounter(this.counter! - this.quantity);
    this.quantity = 0;
    this.total = 0;
    this.cartService.removeFromCart(this.productItem.id);
  }

}
