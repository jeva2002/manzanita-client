import { createActionGroup, emptyProps } from '@ngrx/store';

export const ProductsActions = createActionGroup({
  source: 'Products',
  events: {
    'Get Products': emptyProps(),
  },
});
