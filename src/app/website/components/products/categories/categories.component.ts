import { Component } from '@angular/core';
import { Category } from 'src/app/models/Category.model';

@Component({
  selector: 'app-products-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  categories: Category[] = [
    {
      img: './assets/imgs/boy.jpg',
      name: 'buso',
    },
    {
      img: './assets/imgs/accesory.jpg',
      name: 'buso',
    },
    {
      img: './assets/imgs/boy.jpg',
      name: 'buso',
    },
    {
      img: './assets/imgs/accesory.jpg',
      name: 'buso',
    },
    {
      img: './assets/imgs/boy.jpg',
      name: 'buso',
    },
    {
      img: './assets/imgs/accesory.jpg',
      name: 'buso',
    },
    {
      img: './assets/imgs/boy.jpg',
      name: 'buso',
    },
    {
      img: './assets/imgs/accesory.jpg',
      name: 'buso',
    },
    {
      img: './assets/imgs/boy.jpg',
      name: 'buso',
    },
    {
      img: './assets/imgs/accesory.jpg',
      name: 'buso',
    },
    {
      img: './assets/imgs/boy.jpg',
      name: 'buso',
    },
    {
      img: './assets/imgs/accesory.jpg',
      name: 'buso',
    },
  ];

  push() {
    const firstItem = this.categories[0];
    this.categories.shift();
    this.categories.push(firstItem);
  }

  pull() {
    const lastItem = this.categories.at(-1);
    if (lastItem) {
      this.categories.pop();
      this.categories.unshift(lastItem);
    }
  }
}
