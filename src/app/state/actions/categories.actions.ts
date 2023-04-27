import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Category, CreateCategoryDTO } from 'src/app/models/Category.model';

export const CategoriesActions = createActionGroup({
  source: 'Categories',
  events: {
    'Get Categories': emptyProps(),
    'Add Category': props<CreateCategoryDTO>(),
    'Update Category': props<Category>(),
    'Delete Category': props<{ id: string }>(),
  },
});
