import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartCounterService } from '../services/cart-counter.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  cartItemCount? : number;

  constructor(private cartCounterService: CartCounterService) { }

  ngOnInit(){
    this.cartCounterService.getCartItemCount().subscribe(count => {
      this.cartItemCount = count;
    });
  }

}
