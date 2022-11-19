import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { config } from '../config/url.config';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //Store variables
  private user: UserModel = {
    email: '',
    name: '',
    password: '',
    id: -1,
  };

  private sesion = new BehaviorSubject<UserModel>(this.user);
  sesion$ = this.sesion.asObservable();

  //Another variables
  list_url: string = 'users';

  constructor(private http: HttpClient) {}

  /** Asigna una nueva sesión en el store de la aplicación con los datos del nuevo usuario.
   *
   * @param newUserSesion contiene al nuevo usuario que inició sesión
   */
  setSesionActiveUser(newUserSesion: UserModel) {
    this.user = newUserSesion;
    this.sesion.next(this.user);
  }

  getUserToLogIn(email: string): Observable<UserModel> {
    return this.http.get<UserModel>(
      `${config.base_url}${this.list_url}/login`,
      { params: { email } }
    );
  }

  //Api methods
  getAll(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(
      `${config.base_url}${this.list_url}/getAll`
    );
  }

  add(model: UserModel) {
    this.http
      .post(`${config.base_url}${this.list_url}/add`, model)
      .subscribe((data) => console.log(data));
  }

  edit(model: UserModel) {
    this.http
      .put(`${config.base_url}${this.list_url}/edit`, model)
      .subscribe((data) => console.log(data));
  }

  delete(model: UserModel) {
    this.http
      .delete(`${config.base_url}${this.list_url}/add`, { body: model })
      .subscribe((data) => console.log(data));
  }
}
