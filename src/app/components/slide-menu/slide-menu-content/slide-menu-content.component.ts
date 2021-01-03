import { Component, OnInit } from '@angular/core';
import {BasketService } from '../../../services/basket.service';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'ama-slide-menu-content',
  templateUrl: './slide-menu-content.component.html',
  styleUrls: ['./slide-menu-content.component.scss']
})
export class SlideMenuContentComponent implements OnInit {
  userEmail: any;
  constructor(public basket: BasketService, public authService: AuthService) { }

  ngOnInit() {
    this.authService.user.subscribe(user =>{
      
      if(user === null) {
        return this.userEmail = '';
      }else {
        return this.userEmail = user.email;
      }
    });
  }

   onLogOut() {
    this.authService.logOut();
  }
}
