import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  builder = new FormBuilder();

  loginForm = this.builder.group({
    email: [''],
    password: [''],
  });

  onSubmit() {
    console.log(this.loginForm.value)
  }
}
