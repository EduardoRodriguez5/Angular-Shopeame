import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get('https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products');
  }
}
