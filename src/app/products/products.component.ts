import { Component } from '@angular/core';
import { productCards } from '../shared/const/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

prodArr = productCards

}
