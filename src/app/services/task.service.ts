import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../config/url.config';
import { TaskModel } from '../model/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  list_url: string = 'tasks';

  getAll(): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(
      `${config.base_url}${this.list_url}/getAll`
    );
  }

  getByState(state: string, userId: number): Observable<any>{

    return this.http.get<any>(
      `${config.base_url}${this.list_url}/getTaskByState`,
      {params: {state, userId}}
    );

  }

  add(model: TaskModel) {
    this.http
      .post(`${config.base_url}${this.list_url}/add`, model)
      .subscribe((data) => console.log(data));
  }

  edit(model: TaskModel) {
    this.http
      .put(`${config.base_url}${this.list_url}/edit`, model)
      .subscribe((data) => console.log(data));
  }

  delete(model: TaskModel) {
    this.http
      .delete(`${config.base_url}${this.list_url}/add`, { body: model })
      .subscribe((data) => console.log(data));
  }
}
