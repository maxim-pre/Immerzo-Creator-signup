import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-type-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-type-input.component.html',
  styleUrls: ['./user-type-input.component.css'],
})
export class UserTypeInputComponent {
  @Input() selected?: Boolean;
  @Input() description?: String;

  handleSelect(): void {
    this.selected = !this.selected;
  }
}
