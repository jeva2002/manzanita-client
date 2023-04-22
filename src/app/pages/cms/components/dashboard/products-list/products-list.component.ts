/* eslint-disable @ngrx/avoid-mapping-selectors */
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product.model';
import { selectProductsList } from 'src/app/state/selectors/products.selector';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products$ = new Observable<readonly Product[]>();
  columnsToDisplay = ['id', 'name', 'category', 'options'];

  // eslint-disable-next-line @ngrx/no-typed-global-store, @typescript-eslint/no-explicit-any
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.products$ = this.store.select(selectProductsList);
  }
}
