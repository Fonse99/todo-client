import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TaskModel } from 'src/app/model/task.model';
import { UserModel } from 'src/app/model/user.model';
import { CreationState } from 'src/app/reducers/creation.reducer';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';

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
  ];

  showAddingElement: boolean = false;
  modalToShow: string | null = 'task';
  user: UserModel | undefined;

  constructor(
    private store: Store<CreationState>,
    private taskService: TaskService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.showAddingElement = state.creation;
    });

    this.userService.sesion$.subscribe((currentUser) => {
      this.user = currentUser;
    });

    this.taskService.getAll().subscribe((data) => {
      console.log(data);
      this.list = data;
    });
  }

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

  createTask() {}
}
