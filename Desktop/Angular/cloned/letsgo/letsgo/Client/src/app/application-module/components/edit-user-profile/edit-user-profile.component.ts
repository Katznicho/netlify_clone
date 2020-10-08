import { UsersService } from './../../../shared/services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.scss']
})
export class EditUserProfileComponent implements OnInit {
   userData = { photo:"assets/img/default.jpg", name:"nicolas"}

  constructor(private user:UsersService) {}

  ngOnInit() {
    //this.userData = this.user.getSpecificUser("1234")
  }


}
