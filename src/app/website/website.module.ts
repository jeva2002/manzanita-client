import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { ProductsComponent } from './pages/products/products.component';
import { LayoutComponent } from './pages/layout/layout.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    ProductsComponent,
    LayoutComponent,
  ],
  imports: [CommonModule, WebsiteRoutingModule],
})
export class WebsiteModule {}
