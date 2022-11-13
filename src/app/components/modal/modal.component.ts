import { Component } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { ModalState } from 'src/app/reducers/modal.reducer';

@Component({
  selector: 'cmp-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  isShowing: boolean = true;

  constructor(private store: Store<ModalState>) {
    this.store.subscribe((state) => {
      this.isShowing = state.modal;
    });
  }

  hide(event: Event) {
    let target = event.target as HTMLElement;

    if (target.getAttribute('name') == 'modal') {
      const action: Action = {
        type: 'HIDE',
      };

      this.store.dispatch(action);
    }
  }
}
