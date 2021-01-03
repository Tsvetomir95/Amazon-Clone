import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {FormsModule} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {RouterModule} from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [AuthService, FlashMessagesService ]
})
export class LoginModule { }
