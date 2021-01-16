import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar.component';
import {RouterModule} from '@angular/router';
import { SlideMenuTrigerService } from '../services/slide-menu-triger.service';
import { AuthService} from '../services/auth.service'
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [TopBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [TopBarComponent],
  providers: [SlideMenuTrigerService, AuthService]
})
export class TopBarModule { }
