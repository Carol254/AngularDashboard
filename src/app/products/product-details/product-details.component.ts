import { Component } from '@angular/core';
import { PRODUCTS } from '../../mock-products';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  selectedProduct?:Product;

  products = PRODUCTS;

  viewDetails(product:Product){
    this.selectedProduct = product;
  }

}
