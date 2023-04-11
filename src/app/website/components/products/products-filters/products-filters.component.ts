import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-products-filters',
  templateUrl: './products-filters.component.html',
  styleUrls: ['./products-filters.component.scss'],
})
export class ProductsFiltersComponent {
  @Input() avalaibleColors!: string[];

  @Input() currentColor!: string;
  @Output() currentColorChange = new EventEmitter<string>();

  setFilterByColor(color: string) {
    const change = color === this.currentColor ? '' : color;
    this.currentColor = change;
    this.currentColorChange.emit(change);
  }
}
