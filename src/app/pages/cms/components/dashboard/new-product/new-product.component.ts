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

  // eslint-disable-next-line @ngrx/no-typed-global-store, @typescript-eslint/no-explicit-any
  constructor(private builder: FormBuilder, private store: Store<any>) {}

  ngOnInit(): void {
    this.categories$ = this.store.select(selectCategoriesList);
  }

  form = this.builder.nonNullable.group({
    name: ['', [Validators.required]],
    price: [0, [Validators.required, Validators.min(1000)]],
    color: [[], [Validators.required]],
    sizes: [[], [Validators.required]],
    category: ['', [Validators.required]],
    img: ['', [Validators.required]],
  });

  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);

      this.store.dispatch(
        ProductsActions.addProduct({
          ...this.form.value,
          id: '135',
        } as unknown as Product)
      );
      // this.form.reset();
    } else {
      console.log(this.form);
    }
    // const newProduct: Product = {
    //   id: 'dsadsa',
    //   category: productType ?? '' + reference ?? '',
    //   img: '',
    //   color: color.value,
    //   name: name.value,
    //   price: `${price.value}`,
    //   sizes: sizes.value,
    // };
  }
}
