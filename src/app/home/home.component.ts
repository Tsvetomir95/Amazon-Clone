import { Component, OnInit } from '@angular/core';
import {SlideMenuTrigerService} from '../services/slide-menu-triger.service';
import { openMenu } from '../animations/animations';


@Component({
  selector: 'ama-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [openMenu]
})
export class HomeComponent implements OnInit {
  i = 0;
  sliderImages = [
    'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_en_US_2x._CB428993290_.jpg'
  ];
  changeImages = 0;
  constructor(public slideMenuTriger: SlideMenuTrigerService) { }

  ngOnInit() {
    
  }

  changeImage() {

    // this.i = 0;
    this.i++;
    if (this.i >= this.sliderImages.length) {
      this.i = 0;
    }else if(this.i === null) {
      this.i = 0;
    }

  }
}
