import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from 'src/app/models/Product.model';

export const ProductsActions = createActionGroup({
  source: 'Products',
  events: {
    'Get Products': emptyProps(),
    'Add Product': props<Product>(),
    'Update Product': props<Product>(),
    'Delete Product': props<{ id: string }>(),
  },
});
