import { Component } from '@angular/core';

import { SignupPage1Component } from './signup-page1/signup-page1.component';
import { SignupPage2Component } from './signup-page2/signup-page2.component';
import { SignupPage3Component } from './signup-page3/signup-page3.component';

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
  page1Form: FormGroup;
  page2Form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.page1Form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      user_type: ['', Validators.required],
      TOS: ['', Validators.required],
    });

    this.page2Form = this.fb.group({
      name: ['', [Validators.required, Validators.email]],
      profile_picture: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.required],
      country_code: ['', Validators.required],
    });
  }

  onSubmit() {
    const data = { ...this.page1Form.value, ...this.page2Form.value };
    console.log(data);
  }

  onTest() {
    console.log('hello');
    console.log(this.page1Form.value);
  }

  handleSelectUserType(type: string): void {
    console.log('hello');
    console.log(this.page1Form);
    const currentType = this.page1Form.get('user_type')?.value;

    if (currentType === type) {
      this.page1Form.get('user_type')?.setValue('');
      this.typeSelected = false;
    } else {
      this.page1Form.get('user_type')?.setValue(type);
      this.typeSelected = true;
    }
  }
}
