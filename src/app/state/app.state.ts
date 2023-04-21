import { AdminState } from '../models/Admin.model';
import { CategoriesState } from '../models/Category.model';
import { ProductsState } from '../models/Product.model';
import { adminReducer } from './reducers/admin.reducer';
import { categoriesReducer } from './reducers/categories.reducer';
import { productsReducer } from './reducers/products.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  products: ProductsState;
  categories: CategoriesState;
  admin: AdminState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  products: productsReducer,
  categories: categoriesReducer,
  admin: adminReducer,
};
