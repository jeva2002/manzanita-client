import { createActionGroup, props } from '@ngrx/store';

export const adminActions = createActionGroup({
  source: 'Admin',
  events: {
    'Set Authorization': props<{ token: string }>(),
  },
});
