import { Component } from '@angular/core';
import { AuthService, AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from '../inicio/inicio.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public auth: AuthService) {}
  login(){
    this.auth.loginWithRedirect();
  }
}
