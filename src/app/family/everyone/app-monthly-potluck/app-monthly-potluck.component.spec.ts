import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMonthlyPotluckComponent } from './app-monthly-potluck.component';

describe('AppMonthlyPotluckComponent', () => {
  let component: AppMonthlyPotluckComponent;
  let fixture: ComponentFixture<AppMonthlyPotluckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMonthlyPotluckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMonthlyPotluckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
