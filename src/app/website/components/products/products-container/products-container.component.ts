import { Component, Input, OnChanges } from '@angular/core';
import { Product, ProductMiniature } from 'src/app/models/Product.model';
import { FiltersService } from 'src/app/shared/services/filters.service';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss'],
})
export class ProductsContainerComponent implements OnChanges {
  miniatures: ProductMiniature[] = [];

  @Input() products!: readonly Product[] | null;

  constructor(private filters: FiltersService) {}

  ngOnChanges(): void {
    this.filters.getProductsFilters().subscribe(() => {
      this.miniatures = this.filters
        .applyFiltersProductsList(this.products ?? [])
        .map((product) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { sizes, category, color, ...miniature } = product;
          return miniature;
        });
    });
  }
}
