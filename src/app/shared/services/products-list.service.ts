import { ProductsService } from './products.service';
import { Injectable,  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsListService{

  protected  products = [];

  constructor() {


   }

   addProducts(products) {
    for (const product of products) {
      this.products.push(product);
    }
  }

  getListProducts(){
    return this.products;
  }

}
