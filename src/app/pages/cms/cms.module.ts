import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CmsRoutingModule } from './cms-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { ProductsListComponent } from './components/dashboard/products-list/products-list.component';
import { NewProductComponent } from './components/dashboard/new-product/new-product.component';

import { ParseCategoryPipe } from './pipes/parse-category.pipe';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { ColorsPickerComponent } from './components/common/colors-picker/colors-picker.component';
import { SizesPickerComponent } from './components/common/sizes-picker/sizes-picker.component';
import { UpdateProductComponent } from './components/dashboard/update-product/update-product.component';
import { NewCategoryComponent } from './components/dashboard/new-category/new-category.component';
import { UpdateCategoryComponent } from './components/dashboard/update-category/update-category.component';
import { DeleteCategoryComponent } from './components/dashboard/delete-category/delete-category.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    LoginComponent,
    LoginFormComponent,
    ProductsListComponent,
    ParseCategoryPipe,
    NewProductComponent,
    ColorsPickerComponent,
    SizesPickerComponent,
    UpdateProductComponent,
    NewCategoryComponent,
    UpdateCategoryComponent,
    DeleteCategoryComponent,
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
  ],
})
export class CmsModule {}
