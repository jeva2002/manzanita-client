import { Component, Input, OnInit } from '@angular/core';
import { FiltersService } from 'src/app/website/services/filters.service';

@Component({
  selector: 'app-products-filters',
  templateUrl: './products-filters.component.html',
  styleUrls: ['./products-filters.component.scss'],
})
export class ProductsFiltersComponent implements OnInit {
  collapseFilters = false;
  currentColor = '';

  @Input() avalaibleColors!: string[];

  constructor(private filters: FiltersService) {}

  ngOnInit(): void {
    this.filters.productsFilters.subscribe((productsFilters) => {
      this.currentColor = productsFilters.color;
    });
  }

  setFilterByColor(color: string) {
    const filters = this.filters.productsFilters.getValue();
    this.filters.productsFilters.next({
      ...filters,
      color: filters.color === color ? '' : color,
    });
  }

  setCollapseFilters() {
    this.collapseFilters = !this.collapseFilters;
  }
}
