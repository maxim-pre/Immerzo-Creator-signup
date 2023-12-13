import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTypeInputComponent } from '../user-type-input/user-type-input.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-page1',
  standalone: true,
  imports: [
    UserTypeInputComponent,
    MatCheckboxModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: './signup-page1.component.html',
  styleUrls: ['./signup-page1.component.css'],
})
export class SignupPage1Component {
  @Input() handleSelectUserType: (user_type: string) => void = () => {};
  @Input() userType?: string;
  @Input() typeSelected?: boolean;
  @Input() page1Form!: FormGroup;
  public brandSelectText: string =
    "I'm a brand owner wants to hire for marketing";

  public creatorSelectText: string =
    "I'm a creator who wants to work with brands";

  onSelect(user_type: string) {
    this.handleSelectUserType(user_type);
  }
}
