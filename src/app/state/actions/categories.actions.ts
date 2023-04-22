import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Category } from 'src/app/models/Category.model';

export const CategoriesActions = createActionGroup({
  source: 'Categories',
  events: {
    'Get Categories': emptyProps(),
    'Add Category': props<Category>(),
    'Update Category': props<Category>(),
    'Delete Category': props<{ id: string }>(),
  },
});
