import { createActionGroup, emptyProps } from '@ngrx/store';

export const ProductsActions = createActionGroup({
  source: 'Categories',
  events: {
    'Get Categories': emptyProps(),
  },
});
