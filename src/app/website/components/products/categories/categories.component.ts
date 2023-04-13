import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category.model';
import { FiltersService } from 'src/app/website/services/filters.service';

@Component({
  selector: 'app-products-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [
    {
      id: '1',
      img: './assets/imgs/boy.jpg',
      name: 'buso',
    },
    {
      id: '2',
      img: './assets/imgs/boy.jpg',
      name: 'buso',
    },
    {
      id: '3',
      img: './assets/imgs/accesory.jpg',
      name: 'buso',
    },
    {
      id: '4',
      img: './assets/imgs/boy.jpg',
      name: 'buso',
    },
    {
      id: '5',
      img: './assets/imgs/accesory.jpg',
      name: 'buso',
    },
    {
      id: '6',
      img: './assets/imgs/boy.jpg',
      name: 'buso',
    },
    {
      id: '7',
      img: './assets/imgs/accesory.jpg',
      name: 'buso',
    },
    {
      id: '8',
      img: './assets/imgs/boy.jpg',
      name: 'buso',
    },
    {
      id: '9',
      img: './assets/imgs/accesory.jpg',
      name: 'buso',
    },
    {
      id: '10',
      img: './assets/imgs/boy.jpg',
      name: 'buso',
    },
    {
      id: '11',
      img: './assets/imgs/accesory.jpg',
      name: 'buso',
    },
  ];

  currentCategory = '';

  constructor(private filters: FiltersService) {}

  ngOnInit(): void {
    this.filters.productsFilters.subscribe((productsFilters) => {
      this.currentCategory = productsFilters.category;
    });
  }

  setFilter(category: string) {
    this.filters.productsFilters.next({
      ...this.filters.productsFilters.getValue(),
      category,
    });
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
}
