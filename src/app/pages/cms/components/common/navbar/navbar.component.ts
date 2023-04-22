import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { adminActions } from 'src/app/state/actions/admin.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  // eslint-disable-next-line @ngrx/no-typed-global-store, @typescript-eslint/no-explicit-any
  constructor(private store: Store<any>, private router: Router) {}

  signOff() {
    this.store.dispatch(adminActions.setAuthorization({ token: '' }));
    this.router.navigate(['cms']);
  }
}
