import { Action } from '@ngrx/store';

export function modalReducer(state: boolean = false, action: Action) {
  switch (action.type) {
    case '[modal].SHOW':
      return (state = true);

    case '[modal].HIDE':
      return (state = false);

    default:
      return state;
  }
}

export interface ModalState {
  modal: boolean;
}
