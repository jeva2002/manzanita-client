import { AdminState } from 'src/app/models/Admin.model';
import { adminActions } from '../actions/admin.actions';
import { createReducer, on } from '@ngrx/store';

const initialState: AdminState = {
  authToken: '',
};

export const adminReducer = createReducer(
  initialState,
  on(adminActions.getAuthorization, (_state, payload): AdminState => {
    return { authToken: payload.token };
  })
);