import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductMiniature } from 'src/app/models/Product.model';
import { FiltersService } from 'src/app/shared/services/filters.service';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss'],
})
export class ProductsContainerComponent implements OnInit {
  miniatures: ProductMiniature[] = [];

  @Input() products: Product[] = [];

  constructor(private filters: FiltersService) {}

  ngOnInit(): void {
    this.filters.productsFilters.subscribe(() => {
      this.miniatures = this.filters.applyFiltersProductsList(this.products);
    });
  }

  getMiniatures() {
    const miniatures = this.products.map((product) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { sizes, category, color, ...miniature } = product;
      return miniature;
    });

    this.miniatures = [...miniatures];
  }
}
