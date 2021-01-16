import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';


@Component({
  selector: 'ama-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  changeIcon = false;
  @Input() title: string;
  @Input() productImageUrl: string;
  @Input() productPrice: string;
  @Input() id: string;
  @Output() product = new EventEmitter<string>();

  constructor() {}
   

  ngOnInit() {
  }

  addToBasket() {
    this.product.emit();
    this.changeIcon = true;
  }

  ngOnDestroy() {
    this.changeIcon = false;
  }

}
