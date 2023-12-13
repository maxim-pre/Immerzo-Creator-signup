import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPage3Component } from './signup-page3.component';

describe('SignupPage3Component', () => {
  let component: SignupPage3Component;
  let fixture: ComponentFixture<SignupPage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupPage3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
