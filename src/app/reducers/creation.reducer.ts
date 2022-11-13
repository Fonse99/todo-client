import { Action } from '@ngrx/store';

export function CreationReducer(state: boolean = false, action: Action) {
  switch (action.type) {
    case '[creation].HIDE':
      return (state = false);
    case '[creation].SHOW':
      return (state = true);
    default:
      return state;
  }
}

export interface CreationState {
  creation: boolean;
}
