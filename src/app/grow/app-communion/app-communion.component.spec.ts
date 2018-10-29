import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCommunionComponent } from './app-communion.component';

describe('AppCommunionComponent', () => {
  let component: AppCommunionComponent;
  let fixture: ComponentFixture<AppCommunionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCommunionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCommunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
