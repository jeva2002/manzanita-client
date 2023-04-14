import { ProductsState } from '../models/Product.model';
import { productsReducer } from './reducers/products.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  products: ProductsState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  products: productsReducer,
};
