import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = environment.apiUrl
  private headers = new HttpHeaders().set('Content-Type', 'application/json')
  private nameUserLocalStorage: string = 'data_user';

  constructor(
    private http: HttpClient
  ) { }
  register(user: UserModel) {
    const params = JSON.stringify(user);
    return this.http.post(`${this.apiUrl}/keikovspedro/users/register`, params)
  }
  login(user: UserModel) {
    console.log(user)
    const params = JSON.stringify(user);
    return this.http.post(`${this.apiUrl}/keikovspedro/users/login`, params, { headers: this.headers })
  }
  saveUserLocalStorage(dataUser: object) {
    localStorage.setItem(this.nameUserLocalStorage, JSON.stringify(dataUser));
  }
}



