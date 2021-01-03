import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SlideMenuContentComponent } from "../slide-menu/slide-menu-content/slide-menu-content.component";
import { BasketService } from 'src/app/services/basket.service';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@NgModule({
  declarations: [SlideMenuContentComponent],
  imports: [CommonModule, RouterModule],
  exports: [SlideMenuContentComponent],
  providers: [BasketService, AuthService]
})
export class SlideMenuModule {}
