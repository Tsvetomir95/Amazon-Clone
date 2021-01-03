import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar.component';
import {RouterModule} from '@angular/router';
import { SlideMenuTrigerService } from '../services/slide-menu-triger.service';
import { AuthService} from '../services/auth.service'




@NgModule({
  declarations: [TopBarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [TopBarComponent],
  providers: [SlideMenuTrigerService, AuthService]
})
export class TopBarModule { }
