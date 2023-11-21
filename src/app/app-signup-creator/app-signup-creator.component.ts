import { Component } from '@angular/core';
import { UserTypeInputComponent } from './user-type-input/user-type-input.component';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
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
  ],
})
export class AppSignupCreatorComponent {
  public brandSelected: Boolean = true;
  public creatorSelected: Boolean = false;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [Validators.required]);
  passwordConfirmationFormControl = new FormControl('', [Validators.required]);

  public brandSelectText: String =
    "I'm a brand owner wants to hire for marketing";

  public creatorSelectText: String =
    "I'm a creator who wants to work with brands";
}
