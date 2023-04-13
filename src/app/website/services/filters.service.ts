import { Injectable } from '@angular/core';
import { Product, ProductMiniature } from 'src/app/models/Product.model';
import { BehaviorSubject } from 'rxjs';
import { Filters } from 'src/app/models/Filters.model';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  productsFilters = new BehaviorSubject<Filters>({
    category: '',
    color: '',
  });

  applyFiltersProductsList(productsList: Product[]) {
    const filters = this.productsFilters.getValue();
    return productsList.filter((product) => {
      let flag = true;
      if (
        (!!filters.color && product.color !== filters.color) ||
        (!!filters.category && product.category !== filters.category)
      ) {
        flag = false;
      }
      return flag;
    });
  }
}
