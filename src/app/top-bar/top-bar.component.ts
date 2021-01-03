import { Component, OnInit } from '@angular/core';
import { SlideMenuTrigerService} from '../services/slide-menu-triger.service';
import {BasketService} from '../services/basket.service';
import {AuthService} from '../services/auth.service';
import { Observable } from "rxjs"

import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'ama-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  userEmail: any;
  // shoppingCart = 0;

  constructor(
  public slideMenuTriger: SlideMenuTrigerService,
  public basket: BasketService,
  public authService: AuthService

  ) {

   }

  ngOnInit() {

    
    this.authService.user.subscribe(user =>{
      
      if(user === null) {
        return this.userEmail = '';
      }else {
        return this.userEmail = user.email;
      }
    });
    
  }

  openMenuButton() {
    this.slideMenuTriger.trigerSlideMenu.openMenu = !this.slideMenuTriger.trigerSlideMenu.openMenu;
    
  }

  onLogOut() {
    this.authService.logOut();
  }

}
