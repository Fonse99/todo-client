import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../config/url.config';
import { GroupModel } from '../model/group.model';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  constructor(private http: HttpClient) {}

  list_url: string = 'group/';

  getAll(): Observable<GroupModel> {
    return this.http.get<GroupModel>(`${config}${this.list_url}/getAll`);
  }

  add(model: GroupModel) {
    this.http
      .post(`${config}${this.list_url}/add`, model)
      .subscribe((data) => console.log(data));
  }

  edit(model: GroupModel) {
    this.http
      .put(`${config}${this.list_url}/edit`, model)
      .subscribe((data) => console.log(data));
  }

  delete(model: GroupModel) {
    this.http
      .delete(`${config}${this.list_url}/add`, { body: model })
      .subscribe((data) => console.log(data));
  }
}
