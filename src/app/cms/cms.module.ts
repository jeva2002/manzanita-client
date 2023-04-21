import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CmsRoutingModule } from './cms-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    LoginComponent,
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class CmsModule {}
