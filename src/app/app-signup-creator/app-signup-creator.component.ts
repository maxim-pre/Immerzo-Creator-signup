import { Component } from '@angular/core';
import { UserTypeInputComponent } from './user-type-input/user-type-input.component';
import { SignupPage1Component } from './signup-page1/signup-page1.component';
import { SignupPage2Component } from './signup-page2/signup-page2.component';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-app-signup-creator',
  templateUrl: './app-signup-creator.component.html',
  styleUrls: ['./app-signup-creator.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    UserTypeInputComponent,
    SignupPage1Component,
    MatCheckboxModule,
    CommonModule,
  ],
})
export class AppSignupCreatorComponent {
  userType: string = '';
  typeSelected: boolean = false;

  handleSelectUserType(type: string): void {
    if (this.userType === type) {
      this.userType = '';
      this.typeSelected = false;
    } else {
      this.userType = type;
      this.typeSelected = true;
    }
  }

  test: Boolean = true;

  TermsOfService: Boolean = false;
  email: String = '';
  password: String = '';
  confirmPassword: String = '';

  public brandSelectText: String =
    "I'm a brand owner wants to hire for marketing";

  public creatorSelectText: String =
    "I'm a creator who wants to work with brands";
}
