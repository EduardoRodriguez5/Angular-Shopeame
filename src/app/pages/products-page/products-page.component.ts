import { ProductsListService } from './../../shared/services/products-list.service';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { take } from "rxjs/operators";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  listProducts: any[];
  numbProducts: number;

  constructor(private productService: ProductsService, private productsListService:ProductsListService) {
    
  }
  
  ngOnInit(): void {
    const products = this.productsListService.getListProducts();
    if(!products.length){
    this.productService.getProducts().pipe(take(1)).subscribe((res: any) => {

      this.listProducts = res;
      this.numbProducts = this.listProducts.length;
      this.productsListService.addProducts(this.listProducts);

    });
    }
    else{

      this.listProducts = products;
      this.numbProducts = products.length;

    }
  }
}
