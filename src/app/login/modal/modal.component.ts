import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ama-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() buttonName: string;
  @Output() closeModalEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.closeModalEvent.emit('close');
  }
}
