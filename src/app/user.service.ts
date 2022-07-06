import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";
import {last} from "rxjs";
import {BikeClear} from "./bike-clear";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser!: User

  constructor(public  http: HttpClient) { }

  getAll(firstname: string) {
    return this.http.get<User[]>(
      'http://localhost:8080/user');
  }

  save(user : User) {
    console.log("username" + user.userName);
    return this.http.post(
      'http://localhost:8080/user', user);
  }
  delete(id: number) {
    return this.http.delete(
      'http://localhost:8080/user/' + id);
  }

  login(user : User) {
    return this.http.post<User>(
      'http://localhost:8080/login', user);
  }

  findById(id: number) {
    return this.http.get<User>(
    'http://localhost:8080/bike-user/' + id);
  }

  logout() {
    sessionStorage.clear();
  }
}
