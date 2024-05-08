import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobField } from '../../../models/jobField';
import { JobFieldService } from '../../../services/jobField.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss'
})
export class UpdateUserComponent  implements OnInit {
  profileForm: FormGroup;
  jobFields: JobField[] = [];
  currentUser!:User;
  constructor(
    private formBuilder: FormBuilder,
    private jobFieldService: JobFieldService,
    private userService: UserService,
    private router: Router) {
    this.profileForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      jobField: ['', Validators.required]
    }, { validator: this.checkPasswords });
  }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem("Current-user") || '{}');
    this.getJobFields();
  }

  getJobFields(): void {
    this.jobFieldService.getJobFields()
      .subscribe((jobFields: JobField[]) => {
        this.jobFields = jobFields;
      });
  }

  checkPasswords(group: FormGroup) {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value;
    return (pass === confirmPass || !confirmPass) ? null : { notSame: true }
  }


  update(){
    if (this.profileForm.valid) {
      try {
        this.currentUser.userName=this.profileForm.value.username;
        this.currentUser.password=this.profileForm.value.password;
        this.currentUser.jobFieldId = parseInt(this.profileForm.value.jobField);
        this.userService.updateUser(this.currentUser);
        if (this.currentUser) {
          this.router.navigate(['/home']);
        } else {
          alert("Error update user");
        }
      } catch (error: any) {
        alert(error['errorMessage']);
      }
    }
  }
}