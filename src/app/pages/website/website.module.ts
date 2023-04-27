import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { ProductsComponent } from './pages/products/products.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { ProductsContainerComponent } from './components/products/products-container/products-container.component';
import { CategoriesComponent } from './components/products/categories/categories.component';
import { ProductsFiltersComponent } from './components/products/products-filters/products-filters.component';
import { ProductMiniatureComponent } from './components/products/product-miniature/product-miniature.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { DetailComponent } from './components/product-detail/detail/detail.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    ProductsComponent,
    LayoutComponent,
    BannerComponent,
    FooterComponent,
    ProductsContainerComponent,
    CategoriesComponent,
    ProductsFiltersComponent,
    ProductMiniatureComponent,
    ProductDetailComponent,
    DetailComponent,
  ],
  imports: [CommonModule, WebsiteRoutingModule, SharedModule, NgOptimizedImage],
})
export class WebsiteModule {}
