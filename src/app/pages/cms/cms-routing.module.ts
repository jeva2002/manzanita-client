import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import { ProductsListComponent } from './components/dashboard/products-list/products-list.component';
import { NewProductComponent } from './components/dashboard/new-product/new-product.component';
import { UpdateProductComponent } from './components/dashboard/update-product/update-product.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      { path: 'update/:id', component: UpdateProductComponent },
      { path: 'new-product', component: NewProductComponent },
      { path: 'products-list', component: ProductsListComponent },
      { path: '', redirectTo: 'products-list', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmsRoutingModule {}
