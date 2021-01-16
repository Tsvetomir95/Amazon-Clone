import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {FormsModule} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {RouterModule} from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ReactiveFormsModule} from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
@NgModule({
  declarations: [LoginComponent, ModalComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService]
})
export class LoginModule { }
