import { Component } from '@angular/core';

import { SignupPage1Component } from './signup-page1/signup-page1.component';
import { SignupPage2Component } from './signup-page2/signup-page2.component';
import { SignupPage3Component } from '../signup-page3/signup-page3.component';

import { CommonModule } from '@angular/common';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-app-signup-creator',
  templateUrl: './app-signup-creator.component.html',
  styleUrls: ['./app-signup-creator.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    SignupPage1Component,
    SignupPage2Component,
    SignupPage3Component,
  ],
})
export class AppSignupCreatorComponent {
  userType: string = '';
  typeSelected: boolean = false;
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      userType: [this.userType, Validators.required],
      name: ['', Validators.required],
      country: ['', Validators.required],
      country_code: ['', Validators.required],
      profile_picture: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  handleSelectUserType(type: string): void {
    const currentType = this.signupForm.get('userType')?.value;

    if (currentType === type) {
      this.signupForm.get('userType')?.setValue('');
      this.typeSelected = false;
    } else {
      this.signupForm.get('userType')?.setValue(type);
      this.typeSelected = true;
    }
  }
}
