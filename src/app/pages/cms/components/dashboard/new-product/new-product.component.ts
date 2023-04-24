import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/Category.model';
import { Product } from 'src/app/models/Product.model';
import { ProductsActions } from 'src/app/state/actions/products.actions';
import { selectCategoriesList } from 'src/app/state/selectors/categories.selector';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent implements OnInit {
  categories$ = new Observable<Category[]>();
  form = this.builder.nonNullable.group({
    name: ['', [Validators.required]],
    price: [0, [Validators.required, Validators.min(1000)]],
    color: [[], [Validators.required, Validators.minLength(1)]],
    sizes: [[], [Validators.required, Validators.minLength(1)]],
    category: ['', [Validators.required]],
    img: ['', [Validators.required]],
  });

  // eslint-disable-next-line @ngrx/no-typed-global-store, @typescript-eslint/no-explicit-any
  constructor(private builder: FormBuilder, private store: Store<any>) {}

  ngOnInit(): void {
    this.categories$ = this.store.select(selectCategoriesList);
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.store.dispatch(
        ProductsActions.addProduct({
          ...this.form.value,
          id: '135',
        } as unknown as Product)
      );
      this.form.reset();
    } else {
      console.log(this.form.errors);
    }
  }
}
