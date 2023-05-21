import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { adminActions } from '../actions/admin.actions';

@Injectable()
export class AdminEffects {
  constructor(
    private actions$: Actions,
    private authentication: AuthenticationService
  ) {}

  authAdmin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(adminActions.login),
      mergeMap((action) =>
        this.authentication
          .login(action.credentials)
          .pipe(map((token) => {
            console.log(token)
            return adminActions.setAuthtoken({ token })}))
      )
    );
  });
}
