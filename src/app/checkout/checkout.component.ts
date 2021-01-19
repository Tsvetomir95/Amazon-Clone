import { Component, OnInit } from '@angular/core';
import { openMenu } from '../animations/animations';
import {SlideMenuTrigerService} from '../services/slide-menu-triger.service';
import {BasketService} from '../services/basket.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'ama-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  animations: [openMenu]
})
export class CheckoutComponent implements OnInit {
  sumaFromBasket = 0;
  openMenu = false;
  constructor(public basket: BasketService,
    public product: ProductService) { }

  ngOnInit() {
    for (let i = 0; i < this.basket.productsBasket.length; i++) {
      this.sumaFromBasket += this.basket.productsBasket[i].price;


    }
  }

  removeFromBasket(product) {
    let index;
    index = this.basket.productsBasket.indexOf(product, 0);
    this.basket.productsBasket.splice(index, 1);
    this.sumaFromBasket -= product.price;
  }

  openSlideMenu() {
    this.openMenu = !this.openMenu;    
  }

}
