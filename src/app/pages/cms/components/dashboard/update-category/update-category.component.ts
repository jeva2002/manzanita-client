import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/Category.model';
import { CategoriesActions } from 'src/app/state/actions/categories.actions';
import { selectCategoriesList } from 'src/app/state/selectors/categories.selector';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss'],
})
export class UpdateCategoryComponent implements OnInit {
  categories$ = new Observable<Category[]>();

  // eslint-disable-next-line @ngrx/no-typed-global-store, @typescript-eslint/no-explicit-any
  constructor(private builder: FormBuilder, private store: Store<any>) {}

  ngOnInit(): void {
    this.categories$ = this.store.select(selectCategoriesList);
  }

  form = this.builder.nonNullable.group({
    categoryId: ['', Validators.required],
    productType: [''],
    category: [''],
    img: [''],
  });

  onSubmit() {
    const { productType, category, img, categoryId } = this.form.value;

    this.store.dispatch(
      CategoriesActions.updateCategory({
        id: categoryId ?? '',
        name: category ?? '',
        img: img ?? '',
        productType: productType ?? '',
      })
    );
  }
}
