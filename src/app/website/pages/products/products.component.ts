import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  currentCategory = '';
  currentColor = '';
  products: Product[] = [
    {
      id: '1',
      img: './assets/imgs/boy.jpg',
      mainColor: '#123',
      name: 'mameluco',
      price: '500',
      sizes: ['1 mes'],
    },
    {
      id: '2',
      img: './assets/imgs/boy.jpg',
      mainColor: '#456',
      name: 'mameluco',
      price: '500',
      sizes: ['1 mes'],
    },
    {
      id: '3',
      img: './assets/imgs/boy.jpg',
      mainColor: '#789',
      name: 'mameluco',
      price: '500',
      sizes: ['1 mes'],
    },
    {
      id: '4',
      img: './assets/imgs/boy.jpg',
      mainColor: '#abc',
      name: 'mameluco',
      price: '500',
      sizes: ['1 mes'],
    },
    {
      id: '5',
      img: './assets/imgs/boy.jpg',
      mainColor: '#bcd',
      name: 'mameluco',
      price: '500',
      sizes: ['1 mes'],
    },
    {
      id: '6',
      img: './assets/imgs/boy.jpg',
      mainColor: '#123',
      name: 'mameluco',
      price: '500',
      sizes: ['1 mes'],
    },
  ];
  avalaibleColors: string[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe((a) => console.log(a[0].path));
    this.getAvalaibleColors();
  }

  getAvalaibleColors() {
    const differentColors = new Set(
      this.products.map((product) => product.mainColor)
    );
    console.log(differentColors);
    this.avalaibleColors.push(...differentColors);
  }
}
