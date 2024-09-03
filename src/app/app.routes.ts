import { Routes } from '@angular/router';
import { SignInComponent } from '../Components/sign-in/sign-in.component';
import { OrdersComponent } from '../Components/orders/orders.component';
import { CartComponent } from '../Components/cart/cart.component';
import { HomeComponent } from '../Components/home/home.component';
import { SignUpComponent } from '../Components/sign-up/sign-up.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'SignIn' , component: SignInComponent },
  { path:'SignUp' , component: SignUpComponent },
  { path:'Orders' , component: OrdersComponent },
  { path:'Cart' , component: CartComponent },
  { path:'Home' , component: HomeComponent },
  // { path: '**', redirectTo: 'home' }
];
