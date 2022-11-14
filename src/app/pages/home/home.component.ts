import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TaskModel } from 'src/app/model/task.model';
import { CreationState } from 'src/app/reducers/creation.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  list: TaskModel[] = [
    {
      title: 'Tarea 1',
      description: 'Algo',
      beforeTo: new Date(),
      state: 'pending',
    },
    {
      title: 'Tarea 2',
      description: 'Algo',
      beforeTo: new Date(),
      state: 'pending',
    },
    {
      title: 'Tarea 3',
      description: 'Algo',
      beforeTo: new Date(),
      state: 'pending',
    },
    {
      title: 'Tarea 4',
      description: 'Algo',
      beforeTo: new Date(),
      state: 'pending',
    },
  ];

  completed: TaskModel[] = [];

  showAddingElement: boolean = false;
  modalToShow: string | null = 'task';

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

  showModal(event: Event) {
    let target = event.target as HTMLElement;
    let type = target.getAttribute('name');

    this.modalToShow = type;

    this.store.dispatch({
      type: '[modal].SHOW',
    });
  }

  test(task: TaskModel){
    console.log(task)
  }
}
