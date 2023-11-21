import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTypeInputComponent } from './user-type-input.component';

describe('UserTypeInputComponent', () => {
  let component: UserTypeInputComponent;
  let fixture: ComponentFixture<UserTypeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UserTypeInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTypeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
