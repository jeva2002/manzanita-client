import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { adminActions } from 'src/app/state/actions/admin.actions';
import { selectAuthorizationToken } from 'src/app/state/selectors/admin.selector';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit, OnDestroy {
  authorization$!: Subscription;

  constructor(
    private builder: FormBuilder,
    // eslint-disable-next-line @ngrx/no-typed-global-store, @typescript-eslint/no-explicit-any
    private store: Store<any>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authorization$ = this.store
      .select(selectAuthorizationToken)
      // eslint-disable-next-line @ngrx/no-store-subscription
      .subscribe((authToken) => {
        if (authToken) this.router.navigate(['cms', 'dashboard']);
      });
  }

  loginForm = this.builder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  onSubmit() {
    if (this.loginForm.valid) {
      this.store.dispatch(
        adminActions.login({
          credentials: {
            email: this.loginForm.controls.email.value,
            password: this.loginForm.controls.password.value,
          },
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.authorization$.unsubscribe();
  }
}
