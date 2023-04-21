import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { AdminState } from 'src/app/models/Admin.model';

export const selectAdminFeature = (state: AppState) => state.admin;

export const selectAuthorizationToken = createSelector(
  selectAdminFeature,
  (state: AdminState) => state.authToken
);
