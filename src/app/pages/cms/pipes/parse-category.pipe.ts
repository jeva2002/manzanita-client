import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { selectCategoryById } from 'src/app/state/selectors/categories.selector';

@Pipe({
  name: 'parseCategory',
})
export class ParseCategoryPipe implements PipeTransform {
  // eslint-disable-next-line @ngrx/no-typed-global-store, @typescript-eslint/no-explicit-any
  constructor(private store: Store<any>) {}

  transform(value: string): string {
    let currentCategory = '';

    this.store
      .select(selectCategoryById(value.slice(1)))
      .pipe(take(2))
      .forEach((category) => {
        currentCategory = category?.name ?? '';
      });

    return currentCategory ? currentCategory : value;
  }
}
