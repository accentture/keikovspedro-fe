import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = environment.apiUrl
  /* token:string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGFmYjVjNjYzNWQ0NTE2ZThlNDZkNGYiLCJpYXQiOjE2MjIxMjk2NDEsImV4cCI6MTYyMjczNDQ0MX0._x2H5I6taMtQXvfjfp_W4XH2V_DQ2xv7oAFFQOWIGdg'
  headers = new HttpHeaders().set('Content-Type','application/json').set('nk-token', this.token); */
  
  constructor(
    private http:HttpClient
  ) { }
  register(user:UserModel){
    const params = JSON.stringify(user);
    return this.http.post(`${this.apiUrl}/keikovspedro/users/register`, params )
  }
  login(user:UserModel){
    console.log(user)
    const params = JSON.stringify(user);
    return this.http.post(`${this.apiUrl}/keikovspedro/users/login`, params )
  }
  

}
