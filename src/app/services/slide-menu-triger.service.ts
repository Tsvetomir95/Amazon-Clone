import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlideMenuTrigerService {
  trigerSlideMenu: any;

  constructor() {
    this.trigerSlideMenu = {
      openMenu: false
    }
   }
}
