import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { adminActions } from '../actions/admin.actions';
import { TokenService } from 'src/app/shared/services/token.service';

@Injectable()
export class AdminEffects {
  constructor(
    private actions$: Actions,
    private authentication: AuthenticationService,
    private tokenService: TokenService
  ) {}

  authAdmin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(adminActions.login),
      mergeMap((action) =>
        this.authentication.login(action.credentials).pipe(
          map((authToken) => {
            this.tokenService.saveToken(authToken.token);
            return adminActions.setAuthtoken(authToken);
          })
        )
      )
    );
  });
}
