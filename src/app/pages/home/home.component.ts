import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CreationState } from 'src/app/reducers/creation.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  list = [
    {
      title: 'Tarea 1',
      isComplete: false,
    },
    {
      title: 'Tarea 2',
      isComplete: false,
    },
    {
      title: 'Tarea 3',
      isComplete: false,
    },
    {
      title: 'Tarea 4',
      isComplete: false,
    },
  ];
  completed = [
    {
      title: 'Tarea 6',
      isComplete: true,
    },
  ];

  showAddingElement: boolean = false;

  constructor(private store: Store<CreationState>) {
    this.store.subscribe((state) => {
      this.showAddingElement = state.creation;
    });
  }

  ngOnInit(): void {}

  handleAddNewElement() {
    let currentState = false;

    this.store.subscribe((state) => {
      currentState = state.creation;
    });

    this.store.dispatch({
      type: currentState ? '[creation].HIDE' : '[creation].SHOW',
    });
  }
}
