import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Category } from 'src/app/models/Category.model';
import { FiltersService } from 'src/app/shared/services/filters.service';
import { selectCategoriesList } from 'src/app/state/selectors/categories.selector';

@Component({
  selector: 'app-products-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit, OnChanges {
  categories: Category[] = [];
  currentCategory = '';
  carouselWidth = 'repeat(6, 1fr)'

  @Input() categoriesByProducts: string[] = [];

  // eslint-disable-next-line @ngrx/no-typed-global-store, @typescript-eslint/no-explicit-any
  constructor(private filters: FiltersService, private store: Store<any>) {}

  ngOnInit(): void {
    this.filters.getProductsFilters().subscribe((productsFilters) => {
      this.currentCategory = productsFilters.category;
    });
  }

  ngOnChanges(): void {
    this.getCategories();
    if(this.categories.length < 6){
      this.carouselWidth = `repeat(${this.categories.length}, 1fr)`
    }
  }

  setFilter(category: string) {
    this.filters.modifyFilters(category, 'category');
  }

  pushCarousel() {
    const lastItem = this.categories.at(-1);
    if (lastItem) {
      this.categories.pop();
      this.categories.unshift(lastItem);
    }
  }

  pullCarousel() {
    const firstItem = this.categories[0];
    this.categories.shift();
    this.categories.push(firstItem);
  }

  getCategories() {
    this.store.select(selectCategoriesList).forEach((categories) => {
      this.categories = [];
      categories.forEach((category) => {
        if (this.categoriesByProducts.find((item) => item === category.id))
          this.categories.push(category);
      });
    });
  }
}
