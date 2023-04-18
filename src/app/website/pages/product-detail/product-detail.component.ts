import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/Product.model';
import { selectProduct } from 'src/app/state/selectors/products.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<Product | undefined> = new Observable();

  constructor(private route: ActivatedRoute, private store: Store<any>) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productType = params.get('productType');
      if (productType === 'clothes' || productType === 'accesories') {
        this.product$ = this.store.select(
          selectProduct({
            category: productType,
            id: params.get('id') ?? '',
          })
        );
      }
    });
  }
}
