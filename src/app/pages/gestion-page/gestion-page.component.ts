import { ProductsListService } from './../../shared/services/products-list.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gestion-page',
  templateUrl: './gestion-page.component.html',
  styleUrls: ['./gestion-page.component.scss']
})
export class GestionPageComponent implements OnInit {
  
  valueName: string;
  valuePrice: string;
  valueDescription: string;
  valueImg: string;
  valueOpinions:string
  constructor(private productsListService:ProductsListService) { }

  ngOnInit(): void {

  }

  addNewItem(){

    let item = [{

      name: this.valueName,
      price: this.valuePrice,
      description: this.valueDescription,
      starts: this.valueOpinions,
      image: this.valueImg
    }];

    this.productsListService.addProducts(item);
  }

}
