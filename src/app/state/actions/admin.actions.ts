import { createActionGroup, props } from '@ngrx/store';
import { Credentials } from 'src/app/models/Admin.model';

export const adminActions = createActionGroup({
  source: 'Admin',
  events: {
    'Login': props<{ credentials: Credentials }>(),
    'Set AuthToken': props<{ token: string }>(),
  },
});
