import { Action } from '@ngrx/store';
import { UserModel } from '../model/user.model';

const LOG_IN = 'LOG IN';
const LOG_OUT = 'LOG OUT';

type LoginActions = LogInAction | LogOutAction;

export function loginReducer(
  state: UserModel | undefined = undefined,
  action: LoginActions
) {
  switch (action.type) {
    case LOG_OUT:
      return (state = undefined);

    case LOG_IN:
      return (state = action.payload);

    default:
      return state;
  }
}

export interface LoginState {
  login: undefined | UserModel;
}

export class LogInAction implements Action {
  readonly type = LOG_IN;
  constructor(public payload: UserModel | undefined) {}
}

export class LogOutAction implements Action {
  readonly type = LOG_OUT;
}
