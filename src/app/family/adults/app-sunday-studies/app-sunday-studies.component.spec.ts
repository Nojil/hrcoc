import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSundayStudiesComponent } from './app-sunday-studies.component';

describe('AppSundayStudiesComponent', () => {
  let component: AppSundayStudiesComponent;
  let fixture: ComponentFixture<AppSundayStudiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSundayStudiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSundayStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
