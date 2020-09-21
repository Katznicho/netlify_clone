import { StudentsService } from './../../service/students.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup , Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  formGroup: FormGroup;
  student:{name, email,details}

  constructor(private fb:FormBuilder, private studentService:StudentsService, private router:Router) { }

  ngOnInit() {
   this.formGroup =  this.fb.group({
      name: ['', [Validators.required]],
     email: ['' , [Validators.required]],
      details:['', [Validators.required]]
    })
  }
  onSubmit() {
    this.student = this.formGroup.value
    this.formGroup.reset()
    this.studentService.createStudent(this.student)
    this.router.navigate(['student-list'])

  }

}
