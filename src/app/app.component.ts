import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../Components/header/header.component";
import { HomeComponent } from '../Components/home/home.component';
import { SignInComponent } from "../Components/sign-in/sign-in.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    
    //module
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterModule,
    RouterLinkActive,

    //component
    HeaderComponent,
    HomeComponent,
    SignInComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Amazon_Clone';
}
