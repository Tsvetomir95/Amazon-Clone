import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { TopBarModule } from '../top-bar/top-bar.module';
import {SlideMenuModule} from '../components/slide-menu/slide-menu.module';
import { BasketService } from '../services/basket.service';
import { ProductService } from '../services/product.service';


@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    TopBarModule,
    SlideMenuModule
  ],
  exports: [CheckoutComponent],
  providers: [BasketService, ProductService]
})
export class CheckoutModule { }
