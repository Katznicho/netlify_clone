import { UserToProveService } from './../../../shared/services/user-to-prove.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-approve-users',
  templateUrl: './approve-users.component.html',
  styleUrls: ['./approve-users.component.scss']
})
export class ApproveUsersComponent implements OnInit {
  users = [];
  approvedUsers = []
  roles:Array<string> = ['Role 1', 'Role2', 'Role3']
  selecteRoles: FormGroup;
  form: FormGroup;
  constructor(private UserToProveService:UserToProveService, private spinner:NgxSpinnerService, private fb:FormBuilder) { }
  ngOnInit() {
    setTimeout(() => {
      this.UserToProveService.approveUsers().subscribe(allusers => {
        //console.log(allusers)
        this.users = allusers
        //this.spinner.hide()
      })
    }, 3000)

    setTimeout(() => {
      this.UserToProveService.approvedUsers().subscribe(approvedUser => {
        this.approvedUsers = approvedUser
        //this.spinner.hide()
      })
    }, 3000)
    this.selecteRoles = new FormGroup({
      selectRole: new FormControl()
    })

    this.form =  this.createFormArray()
  }
  createFormArray() {
    return this.fb.group({
      approveUsers:this.fb.array([this.users])
    })
  }
  checkIfUserExists(array:Array<any>) {
    const length = array.length
    if (length >=1) {
      //this.spinner.hide()
      return true
    }
    else {
     // this.spinner.show()
      return false
    }
    
    
  }
  assignRole(role) {
    // return this.selectedRole = role.target.value
    console.log(role)
    
  }
  approve(id: Number) {
    if (this.selecteRoles.controls.selecteRole.value === '') {
      alert('Assign a role to a user')
    }
    else {
      //console.log(this.selectedRole.value)
      this.UserToProveService.approveUser(id, this.selecteRoles.controls.selecteRole.value)
      
    }
    
  }

}
