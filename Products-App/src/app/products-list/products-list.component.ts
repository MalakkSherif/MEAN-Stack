import { Component } from '@angular/core';
import { Product } from '../types/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

  products! : Product[] ;

  constructor(private productsService: ProductsService) { }


  ngOnInit(){
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

}
