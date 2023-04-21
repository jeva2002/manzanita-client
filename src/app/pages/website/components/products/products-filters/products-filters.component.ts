import { Component, Input, OnInit } from '@angular/core';
import { FiltersService } from 'src/app/shared/services/filters.service';

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
    this.filters.getProductsFilters().subscribe((productsFilters) => {
      this.currentColor = productsFilters.color;
    });
  }

  setFilterByColor(color: string) {
    this.filters.modifyFilters(color, 'color');
  }

  setCollapseFilters() {
    this.collapseFilters = !this.collapseFilters;
  }
}
