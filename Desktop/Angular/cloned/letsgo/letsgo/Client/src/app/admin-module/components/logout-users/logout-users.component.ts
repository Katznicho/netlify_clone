import { UsersService } from './../../../shared/services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout-users',
  templateUrl: './logout-users.component.html',
  styleUrls: ['./logout-users.component.scss']
})
export class LogoutUsersComponent implements OnInit {
  logOutUsers = []

  constructor(private loggoutUsers:UsersService) { }

  ngOnInit() {
    this.loggoutUsers.logOutUsers().subscribe(loggedOut => {
      this.logOutUsers = loggedOut
    })
  }
  checkLogOutUsers(array: Array<any>) {
    return array.length?true:false
    
  }

}
