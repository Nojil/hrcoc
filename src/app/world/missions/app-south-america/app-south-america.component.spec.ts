import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSouthAmericaComponent } from './app-south-america.component';

describe('AppSouthAmericaComponent', () => {
  let component: AppSouthAmericaComponent;
  let fixture: ComponentFixture<AppSouthAmericaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSouthAmericaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSouthAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
