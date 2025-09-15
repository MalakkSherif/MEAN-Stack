import { Component, Input } from '@angular/core';
import { Product } from '../types/product';
import { CurrencyPipe } from '@angular/common';
import { StarsPipe } from '../pipes/stars.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, StarsPipe, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() productItem! : Product;

}
