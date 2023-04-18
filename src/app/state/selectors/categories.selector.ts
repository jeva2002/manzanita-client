import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CategoriesState } from 'src/app/models/Category.model';

export const selectCategoriesFeature = (state: AppState) => state.categories;

export const selectCategoriesList = createSelector(
  selectCategoriesFeature,
  (state: CategoriesState) => state.categories
);
