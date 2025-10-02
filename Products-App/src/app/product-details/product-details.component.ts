import { Component, Input } from '@angular/core';
import { Product } from '../types/product';
import { StarsPipe } from '../pipes/stars.pipe';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { CartCounterService } from '../services/cart-counter.service';

@Component({
    selector: 'app-product-details',
    imports: [StarsPipe, CurrencyPipe,RouterLink],
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

    productItem!: Product;
    counter?: number;

    @Input() productId!: string;


    constructor(
        private activatedRoute: ActivatedRoute,
        private productsService: ProductsService,
        private cartCounterService: CartCounterService) {

    }

    ngOnInit() {
        // this.productItem=this.products.find(obj => obj.id === +this.activatedRoute.snapshot.params['productId'])
        // console.log(this.productItem)
        const id = this.activatedRoute.snapshot.paramMap.get('productId');
        this.productsService.getProductById(id!).subscribe((data) => {
            this.productItem = data;
        });


        this.cartCounterService.getCartItemCount().subscribe(count => {
            this.counter = count;
        });
    }

    handleAddToCart() {
        this.cartCounterService.updateCounter(this.counter! + 1);
    }


}
