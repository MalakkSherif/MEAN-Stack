import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '../types/response';
import { map } from 'rxjs';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }

  getProducts(){
    return this.http.get<Response>('https://dummyjson.com/products').pipe(map((res : Response) => res.products) );
  }

  getProductById(id : string){
    return this.http.get<Product>(`https://dummyjson.com/products/${id}`);
  } 
}
