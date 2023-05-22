import { Component, OnInit } from '@angular/core';
import { TokenService } from './shared/services/token.service';
import { Store } from '@ngrx/store';
import { adminActions } from './state/actions/admin.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'manzanita-client';

  // eslint-disable-next-line @ngrx/no-typed-global-store, @typescript-eslint/no-explicit-any
  constructor(private tokenService: TokenService, private store: Store<any>) {}

  ngOnInit(): void {
    const authToken = this.tokenService.getToken();
    console.log(authToken);
    if (authToken) {
      this.store.dispatch(adminActions.setAuthtoken({ token: authToken }));
    }
  }
}
