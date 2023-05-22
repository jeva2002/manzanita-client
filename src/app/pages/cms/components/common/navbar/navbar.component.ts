import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isActive = false;

  constructor(private tokenService: TokenService, private router: Router) {}

  toggleBar() {
    this.isActive = !this.isActive;
  }

  signOff() {
    this.tokenService.clearToken();
    this.router.navigate(['cms']);
  }
}
