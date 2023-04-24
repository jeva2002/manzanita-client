import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/Category.model';
import { Product } from 'src/app/models/Product.model';
import { ProductsActions } from 'src/app/state/actions/products.actions';
import { selectCategoriesList } from 'src/app/state/selectors/categories.selector';
import { selectProductById } from 'src/app/state/selectors/products.selector';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent implements OnInit {
  //TODO evitar la repetición de código entre create product y update product
  //TODO buscar que el input de las tallas se actualice

  categories$ = new Observable<Category[]>();
  productId = '';
  form = this.builder.nonNullable.group({
    name: [''],
    price: [0, [Validators.min(1000)]],
    color: [[''], [Validators.minLength(1)]],
    sizes: [[''], [Validators.minLength(1)]],
    category: [''],
    img: [''],
  });

  constructor(
    private builder: FormBuilder,
    // eslint-disable-next-line @ngrx/no-typed-global-store, @typescript-eslint/no-explicit-any
    private store: Store<any>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.categories$ = this.store.select(selectCategoriesList);
    this.route.paramMap.subscribe((param) => {
      this.productId = param.get('id') ?? '';
      this.store
        .select(selectProductById(this.productId))
        .forEach((product) => {
          if (product) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { id, ...formData } = product;
            this.form.patchValue({
              ...formData,
              price: parseInt(formData.price),
            });
          }
        });
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.store.dispatch(
        ProductsActions.updateProduct({
          ...this.form.value,
          id: this.productId,
        } as unknown as Product)
      );
    } else {
      console.log(this.form.errors);
    }
  }
}
