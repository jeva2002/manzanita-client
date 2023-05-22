import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  constructor(
    private builder: FormBuilder,
    // eslint-disable-next-line @ngrx/no-typed-global-store, @typescript-eslint/no-explicit-any
    private tokenService: TokenService,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const authToken = this.tokenService.getToken();
    console.log(authToken);
    if (authToken) this.router.navigate(['cms', 'dashboard']);
  }

  loginForm = this.builder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService
        .login({
          email: this.loginForm.controls.email.value,
          password: this.loginForm.controls.password.value,
        })
        .pipe(take(1))
        .subscribe((authToken) => {
          this.tokenService.saveToken(authToken.token);
          this.router.navigate(['cms', 'dashboard']);
        });
    }
  }
}
