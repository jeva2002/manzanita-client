import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CategoriesActions } from 'src/app/state/actions/categories.actions';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss'],
})
export class NewCategoryComponent {
  // eslint-disable-next-line @ngrx/no-typed-global-store, @typescript-eslint/no-explicit-any
  constructor(private builder: FormBuilder, private store: Store<any>) {}

  form = this.builder.nonNullable.group({
    productType: ['', Validators.required],
    category: ['', Validators.required],
    img: ['', Validators.required],
  });

  onSubmit() {
    const { productType, category, img } = this.form.value;
    const name: string = category ?? '';

    this.store.dispatch(
      CategoriesActions.addCategory({
        name: name,
        img: img ?? '',
        productType: productType ?? '',
      })
    );
  }
}
