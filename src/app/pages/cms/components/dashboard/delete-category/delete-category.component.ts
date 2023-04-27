import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/Category.model';
import { CategoriesActions } from 'src/app/state/actions/categories.actions';
import { selectCategoriesList } from 'src/app/state/selectors/categories.selector';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.scss'],
})
export class DeleteCategoryComponent implements OnInit {
  targetCategory = new FormControl('', [Validators.required]);
  categories$ = new Observable<Category[]>();

  // eslint-disable-next-line @ngrx/no-typed-global-store, @typescript-eslint/no-explicit-any
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.categories$ = this.store.select(selectCategoriesList);
  }

  onSubmit() {
    if (this.targetCategory.valid)
      this.store.dispatch(
        CategoriesActions.deleteCategory({
          id: this.targetCategory.value ?? '',
        })
      );
  }
}
