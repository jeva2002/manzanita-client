import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ProductsState } from 'src/app/models/Product.model';

export const selectProductsFeature = (state: AppState) => state.products;

export const selectProductsList = createSelector(
  selectProductsFeature,
  (state: ProductsState) => state.products
);

export const selectClothes = createSelector(
  selectProductsFeature,
  (state: ProductsState) =>
    state.products.filter((product) => product.category[0] === 'C')
);

export const selectAccesories = createSelector(
  selectProductsFeature,
  (state: ProductsState) =>
    state.products.filter((product) => product.category[0] !== 'C')
);

export const selectProduct = (props: { id: string }) => {
  return createSelector(selectProductsFeature, (state: ProductsState) => {
    return state.products.find((product) => product.id === props.id);
  });
};

export const selectProductsLoading = createSelector(
  selectProductsFeature,
  (state: ProductsState) => state.loading
);
