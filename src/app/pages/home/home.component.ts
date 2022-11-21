import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
  showAddingElement: boolean = false;
  modalToShow: string | null = 'task';
  user: UserModel | undefined;
  list: TaskModel[] = [];

  constructor(
    private store: Store<CreationState>,
    private taskService: TaskService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.sesion$.subscribe((currentUser) => {
      this.user = currentUser;
      const userId = this.user?.Id ? this.user?.Id : -1;

      this.taskService
        .getByState('PENDING', userId)
        .pipe((data) => {
          return data as Observable<TaskModel[]>;
        })
        .subscribe((data) => {
          console.log(userId, data);
          this.list = data;
        });
    });

    this.store.subscribe((state) => {
      this.showAddingElement = state.creation;
    });
  }

  handleAddNewElement() {
    return () => {
      let currentState = false;

      this.store.subscribe((state) => {
        currentState = state.creation;
      });

      this.store.dispatch({
        type: currentState ? '[creation].HIDE' : '[creation].SHOW',
      });
    };
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

  completeTask(id: number | undefined) {
    return () => {
      const taskId = id ? id : -1;
      this.taskService.edit(taskId);
      console.log(id);
    };
  }



}
