import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/Product.model';
import { selectProduct } from 'src/app/state/selectors/products.selector';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  // eslint-disable-next-line @ngrx/no-typed-global-store, @typescript-eslint/no-explicit-any
  constructor(private route: ActivatedRoute, private store: Store<any>) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.store
        .select(
          selectProduct({
            id: params.get('id') ?? '',
          })
        )
        .forEach((product) => {
          if (product) this.product = { ...product };
        });
    });
  }
}
