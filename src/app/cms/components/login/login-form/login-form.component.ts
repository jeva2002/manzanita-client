import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { adminActions } from 'src/app/state/actions/admin.actions';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  // eslint-disable-next-line @ngrx/no-typed-global-store, @typescript-eslint/no-explicit-any
  constructor(private builder: FormBuilder, private store: Store<any>, private router: Router) {}

  loginForm = this.builder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  onSubmit() {
    this.store.dispatch(adminActions.setAuthorization({
      token: 'serverless token'
    }))
    this.router.navigate(['cms', 'dashboard'])
  }
}
