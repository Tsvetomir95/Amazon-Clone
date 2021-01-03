import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TopBarModule} from '../top-bar/top-bar.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProductComponent } from './product/product.component';
import { FooterModule } from '../footer/footer.module';
import { SlideMenuTrigerService } from '../services/slide-menu-triger.service';
import { SlideMenuContentComponent } from '../components/slide-menu/slide-menu-content/slide-menu-content.component';
import { SlideMenuModule } from '../components/slide-menu/slide-menu.module';
import { BasketService } from '../services/basket.service';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';



@NgModule({
  declarations: [HomeComponent, ProductComponent],
  imports: [
    CommonModule,
    TopBarModule,
    BrowserAnimationsModule,
    FooterModule,
    SlideMenuModule
  ],
  providers: [SlideMenuTrigerService, BasketService, Product, ProductService]
})
export class HomeModule { }
