import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {
  CreateCategoryDTO,
  UpdateCategoryDTO,
} from 'src/app/models/Category.model';

export const CategoriesActions = createActionGroup({
  source: 'Categories',
  events: {
    'Get Categories': emptyProps(),
    'Add Category': props<CreateCategoryDTO>(),
    'Update Category': props<UpdateCategoryDTO>(),
    'Delete Category': props<{ id: string }>(),
  },
});
