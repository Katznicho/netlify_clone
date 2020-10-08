import { filter } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'nicholas',
      password: "1234",
      branch: "branch 1",
      contact: "0759983853",
      email: "katznicho@gmail.com",
      photo: "assets/img/default.jpg",
      status:"loggedIn"
    },
    {
      id: 2,
      name: 'katende',
      password: "12345",
      branch: "branch 1",
      contact: "0759983853",
      email: "katznicho@gmail.com",
      photo: "assets/img/default.jpg",
      status:"loggedIn"
    },
    {
      id: 3,
      name: 'nicholas',
      password: "12346",
      branch: "branch 1",
      contact: "0759983853",
      email: "katznicho@gmail.com",
      photo: "assets/img/default.jpg",
      status:"NotLoggedIn"
    }
  ]

  constructor() { }
  getSpecificUser(password: string) {
    return this.users.find(user=>user.password === password)
  }
  viewLoggedIn() {
    return of(this.users.filter(user=>user.status === 'loggedIn'))
  }
  logOutUsers() {
    return of(this.users.filter(user=>user.status !== "loggedIn"))
  }
}
