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

  list_url: string = 'groups';

  getAll(userId: number): Observable<GroupModel[]> {
    return this.http.get<GroupModel[]>(
      `${config.base_url}${this.list_url}/getAll`,
      {
        params: { userId },
      }
    );
  }

  add(model: GroupModel) {
    this.http
      .post(`${config.base_url}${this.list_url}/add`, model)
      .subscribe((data) => console.log(data));
  }

  edit(model: GroupModel) {
    this.http
      .put(`${config.base_url}${this.list_url}/edit`, model)
      .subscribe((data) => console.log(data));
  }

  delete(model: GroupModel) {
    this.http
      .delete(`${config.base_url}${this.list_url}/add`, { body: model })
      .subscribe((data) => console.log(data));
  }
}
