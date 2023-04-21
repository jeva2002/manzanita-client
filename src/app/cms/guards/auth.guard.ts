import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAuthorizationToken } from 'src/app/state/selectors/admin.selector';

export const authGuard = () => {
  const store = inject(Store);
  const router = inject(Router);
  let hasToken = false;
  store
    .select(selectAuthorizationToken)
    .forEach((token) => (hasToken = !!token));

  return hasToken ? true : router.navigate(['/cms']);
};
