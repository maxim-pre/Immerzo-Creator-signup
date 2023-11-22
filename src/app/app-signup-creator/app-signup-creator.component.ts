import { Component } from '@angular/core';
import { UserTypeInputComponent } from './user-type-input/user-type-input.component';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
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
    MatCheckboxModule,
  ],
})
export class AppSignupCreatorComponent {
  brandSelected: Boolean = true;
  creatorSelected: Boolean = false;
  checked: Boolean = false;

  handleSelect(): void {}

  public brandSelectText: String =
    "I'm a brand owner wants to hire for marketing";

  public creatorSelectText: String =
    "I'm a creator who wants to work with brands";
}
