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

  list_url: string = 'task';

  getAll(): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(`${config}${this.list_url}/getAll`);
  }

  add(model: TaskModel) {
    this.http
      .post(`${config}${this.list_url}/add`, model)
      .subscribe((data) => console.log(data));
  }

  edit(model: TaskModel) {
    this.http
      .put(`${config}${this.list_url}/edit`, model)
      .subscribe((data) => console.log(data));
  }

  delete(model: TaskModel) {
    this.http
      .delete(`${config}${this.list_url}/add`, { body: model })
      .subscribe((data) => console.log(data));
  }
}
