import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Filters } from 'src/app/models/Filters.model';
import { Product } from 'src/app/models/Product.model';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  private productsFilters$ = new BehaviorSubject<Filters>({
    category: '',
    color: '',
  });

  getProductsFilters() {
    return this.productsFilters$.asObservable();
  }

  applyFiltersProductsList(productsList: readonly Product[]): Product[] {
    const filters = this.productsFilters$.getValue();
    return productsList.filter((product) => {
      let flag = true;
      if (!!filters.category && product.category !== filters.category) {
        flag = false;
      }
      if (filters.color) {
        flag = product.color.some((color) => color === filters.color);
      }
      return flag;
    });
  }

  modifyFilters(value: string, targetFilter: 'color' | 'category') {
    const filters = this.productsFilters$.getValue();
    this.productsFilters$.next({
      ...filters,
      [targetFilter]: filters[targetFilter] === value ? '' : value,
    });
  }
}
