import { createActionGroup, props } from '@ngrx/store';

export const adminActions = createActionGroup({
  source: 'Admin',
  events: {
    'Get Authorization': props<{ token: string }>(),
  },
});
