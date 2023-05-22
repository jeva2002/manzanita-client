import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TokenService } from 'src/app/shared/services/token.service';
import { adminActions } from 'src/app/state/actions/admin.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isActive = false;

  constructor(
    // eslint-disable-next-line @ngrx/no-typed-global-store, @typescript-eslint/no-explicit-any
    private store: Store<any>,
    private tokenService: TokenService,
    private router: Router
  ) {}

  toggleBar() {
    this.isActive = !this.isActive;
  }

  signOff() {
    this.tokenService.cleanToken();
    this.store.dispatch(adminActions.setAuthtoken({ token: '' }));
    this.router.navigate(['cms']);
  }
}
