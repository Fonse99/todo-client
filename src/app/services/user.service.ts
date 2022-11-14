import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../config/url.config';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  list_url: string = 'category/';

  getAll(): Observable<UserModel> {
    return this.http.get<UserModel>(`${config}${this.list_url}/getAll`);
  }

  add(model: UserModel) {
    this.http
      .post(`${config}${this.list_url}/add`, model)
      .subscribe((data) => console.log(data));
  }

  edit(model: UserModel) {
    this.http
      .put(`${config}${this.list_url}/edit`, model)
      .subscribe((data) => console.log(data));
  }

  delete(model: UserModel) {
    this.http
      .delete(`${config}${this.list_url}/add`, { body: model })
      .subscribe((data) => console.log(data));
  }
}
