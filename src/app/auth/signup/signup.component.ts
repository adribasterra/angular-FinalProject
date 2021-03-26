import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  nameControl: AbstractControl;
  surnameControl: AbstractControl;
  passwordControl: AbstractControl;
  genderControl: AbstractControl;
  emailControl: AbstractControl;
  birthControl: AbstractControl;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.signupForm = formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      password: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      birth: ['', Validators.required],
    });

    this.nameControl = this.signupForm.controls['name'];
    this.surnameControl = this.signupForm.controls['surname'];
    this.passwordControl = this.signupForm.controls['password'];
    this.genderControl = this.signupForm.controls['gender'];
    this.emailControl = this.signupForm.controls['email'];
    this.birthControl = this.signupForm.controls['birth'];
  }

  ngOnInit(): void {
  }

  signup(){
    const user : User = new User(this.signupForm.value);
    this.authService.signup(user);

    // Navigate to another page
  }

  cancel(){
    // Navigate to login page
    this.router.navigateByUrl('/auth/login');
  }

}
