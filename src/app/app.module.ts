import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TopBarModule} from './top-bar/top-bar.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CheckoutModule } from './checkout/checkout.module';
import { SlideMenuContentComponent } from './components/slide-menu/slide-menu-content/slide-menu-content.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { environment } from 'src/environments/environment';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopBarModule,
    HomeModule,
    LoginModule,
    BrowserAnimationsModule,
    CheckoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
