import { AfterViewInit, Component, OnInit } from '@angular/core';
import {SlideMenuTrigerService} from '../services/slide-menu-triger.service';
import { openMenu } from '../animations/animations';
import { FetchProductsService } from '../services/fetch-products.service';
import { BasketService } from '../services/basket.service';


@Component({
  selector: 'ama-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [openMenu]
})
export class HomeComponent implements OnInit, AfterViewInit {
  i = 0;
  allProducts: any;
  filteredProducts: any;
  sliderImages = [
    'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_en_US_2x._CB428993290_.jpg'
  ];
  openMenu: boolean  = false;
  changeImages = 0;
  loadingPage: boolean;
  constructor(
    public slideMenuTriger: SlideMenuTrigerService, 
    private fetchProducts: FetchProductsService,
    private basket: BasketService,
    ) { }

  ngOnInit() {
    this.fetchProducts.getAllProducts().subscribe(product => this.filteredProducts = this.allProducts = product);
    if(this.filteredProducts){
      this.filteredProducts.slice(1, 10);
    }
    
  }

handleAddToCard(product) {
  this.basket.productsBasket.push(product);
}

  changeImage() {
    this.i++;
    if (this.i >= this.sliderImages.length) {
      this.i = 0;
    }else if(this.i === null) {
      this.i = 0;
    }

  }


  onSearch(query: string) {
    this.filteredProducts = (query) ? this.allProducts.filter(product => product.title.includes(query)) : this.allProducts;
    console.log(this.filteredProducts);
  }

  handlePage(event) {
    console.log(event);
  }

  openSlideMenu(event: string) {
    console.log(event);
    this.openMenu = !this.openMenu;
  }


  ngAfterViewInit() {
    this.loadingPage = true;
  }
}
