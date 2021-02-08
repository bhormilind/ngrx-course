import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
  State
} from '@ngrx/store';
import { AuthActions } from '../action-types';
import { User } from '../model/user.model';

export interface AuthState {
  user: User
}

export const initState : AuthState = {
  user: undefined
}


export const authReducer = createReducer(
  initState,
  on(AuthActions.login, (state, action) => {
    return {
      user: action.user
    }
  })
);
