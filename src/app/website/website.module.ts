import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { ProductsComponent } from './pages/products/products.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { ProductsContainerComponent } from './components/products/products-container/products-container.component';
import { SizingComponent } from './components/products/sizing/sizing.component';
import { CategoriesComponent } from './components/products/categories/categories.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    ProductsComponent,
    LayoutComponent,
    BannerComponent,
    FooterComponent,
    ProductsContainerComponent,
    SizingComponent,
    CategoriesComponent,
  ],
  imports: [CommonModule, WebsiteRoutingModule],
})
export class WebsiteModule {}
