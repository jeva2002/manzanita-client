import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: '1',
      img: './assets/imgs/boy.jpg',
      color: '#123',
      name: 'mameluco',
      price: '42021',
      sizes: ['1 mes'],
      category: '1',
    },
    {
      id: '2',
      img: './assets/imgs/boy.jpg',
      color: '#456',
      name: 'mameluco',
      price: '3512',
      sizes: ['1 mes'],
      category: '1',
    },
    {
      id: '3',
      img: './assets/imgs/accesory.jpg',
      color: '#789',
      name: 'mameluco',
      price: '5000',
      sizes: ['1 mes'],
      category: '1',
    },
    {
      id: '4',
      img: './assets/imgs/boy.jpg',
      color: '#abc',
      name: 'mameluco',
      price: '500',
      sizes: ['1 mes'],
      category: '1',
    },
    {
      id: '5',
      img: './assets/imgs/boy.jpg',
      color: '#bcd',
      name: 'mameluco',
      price: '500',
      sizes: ['1 mes'],
      category: '1',
    },
    {
      id: '6',
      img: './assets/imgs/boy.jpg',
      color: '#123',
      name: 'mameluco',
      price: '500',
      sizes: ['1 mes'],
      category: '1',
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
      this.products.map((product) => product.color)
    );
    this.avalaibleColors.push(...differentColors);
  }
}
