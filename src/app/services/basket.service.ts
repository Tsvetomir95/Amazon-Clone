import { Injectable } from "@angular/core";
import { Basket } from "../models/basket";

@Injectable({
  providedIn: "root",
})
export class BasketService {
  productsBasket: any[];

  constructor() {
    this.productsBasket = [

    ];
  }

  removeFromBasket(product) {
    
  }
}
