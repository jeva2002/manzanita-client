import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Product } from 'src/app/models/Product.model';
import {
  selectAccesories,
  selectClothes,
} from 'src/app/state/selectors/products.selector';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<readonly Product[]> = new Observable();
  avalaibleColors: string[] = [];

  // eslint-disable-next-line @ngrx/no-typed-global-store, @typescript-eslint/no-explicit-any
  constructor(private route: ActivatedRoute, private store: Store<any>) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.products$ = this.store.select(
        params.get('productType') === 'clothes'
          ? selectClothes
          : selectAccesories
      );
      this.getAvalaibleColors();
    });
  }

  getAvalaibleColors() {
    this.products$
      .pipe(map((project) => project.map((product) => product.color)))
      .subscribe((list) => {
        const differentColors = new Set(list.flat());
        this.avalaibleColors = [...differentColors];
      });
  }
}
