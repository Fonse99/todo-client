import { Action } from '@ngrx/store';

export function logingReducer(state = 'logged in', action: Action) {
  switch (action.type) {
    case 'LOG OUT':
      return (state = 'out');

    case 'LOG IN':
      return (state = 'in');

    default:
      return state;
  }
}

export interface LoginState {
  login: string;
}
