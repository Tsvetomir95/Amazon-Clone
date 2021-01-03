import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { AuthGuard } from "./guards/auth.guard";
import { AuthService } from "./services/auth.service";
import { BasketService } from "./services/basket.service";
import { ProductService } from "./services/product.service";
import { SlideMenuTrigerService } from "./services/slide-menu-triger.service";

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "checkout", component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: "*", component: HomeComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    AuthService,
    BasketService,
    ProductService,
    SlideMenuTrigerService,
  ],
})
export class AppRoutingModule {}
