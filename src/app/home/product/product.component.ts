import { Component, OnInit, Input } from '@angular/core';
import { BasketService } from '../../services/basket.service';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'ama-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {



  constructor( public basket: BasketService, public products: ProductService) {

   }

  ngOnInit() {

  }

  addToBasket(product) {
    this.basket.productsBasket.push(product);
    product.isAddToCart = true;
    
  }

}
