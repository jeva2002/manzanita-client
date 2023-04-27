import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {
  CreateProductDTO,
  UpdateProductDTO,
} from 'src/app/models/Product.model';

export const ProductsActions = createActionGroup({
  source: 'Products',
  events: {
    'Get Products': emptyProps(),
    'Add Product': props<CreateProductDTO>(),
    'Update Product': props<UpdateProductDTO>(),
    'Delete Product': props<{ id: string }>(),
  },
});
