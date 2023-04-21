import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAuthorizationToken } from 'src/app/state/selectors/admin.selector';

export const authGuard = () => {
  const store = inject(Store);
  let hasToken = false;
  store
    .select(selectAuthorizationToken)
    .forEach((token) => (hasToken = !!token));

  return hasToken;
};
