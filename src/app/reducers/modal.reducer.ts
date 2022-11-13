import { Action } from '@ngrx/store';

export function modalReducer(state: boolean = false, action: Action) {
  switch (action.type) {
    case 'SHOW':
      return (state = true);

    case 'HIDE':
      return (state = false);

    default:
      return state;
  }
}

export interface ModalState {
  modal: boolean;
}
