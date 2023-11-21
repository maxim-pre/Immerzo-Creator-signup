import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSignupCreatorComponent } from './app-signup-creator.component';

describe('AppSignupCreatorComponent', () => {
  let component: AppSignupCreatorComponent;
  let fixture: ComponentFixture<AppSignupCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSignupCreatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSignupCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
