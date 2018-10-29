import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCouncelingComponent } from './app-counceling.component';

describe('AppCouncelingComponent', () => {
  let component: AppCouncelingComponent;
  let fixture: ComponentFixture<AppCouncelingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCouncelingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCouncelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
