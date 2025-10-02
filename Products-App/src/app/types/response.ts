import { Product } from "./product";

export interface Response {

    limit : number,
    products: Array<Product>,
    skip : number,
    total : number
}

