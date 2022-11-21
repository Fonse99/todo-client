import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../config/url.config';
import { ListModel } from '../model/list.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  list_url: string = 'category';

  getAll(userId: number): Observable<ListModel[]> {
    return this.http.get<ListModel[]>(
      `${config.base_url}${this.list_url}/getAll`,
      { params: { userId } }
    );
  }

  add(model: ListModel) {
    this.http
      .post(`${config.base_url}${this.list_url}/add`, model)
      .subscribe((data) => console.log(data));
  }

  edit(model: ListModel) {
    this.http
      .put(`${config.base_url}${this.list_url}/edit`, model)
      .subscribe((data) => console.log(data));
  }

  delete(model: ListModel) {
    this.http
      .delete(`${config.base_url}${this.list_url}/add`, { body: model })
      .subscribe((data) => console.log(data));
  }
}
