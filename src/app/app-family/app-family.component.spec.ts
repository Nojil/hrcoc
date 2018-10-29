import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFamilyComponent } from './app-family.component';

describe('AppFamilyComponent', () => {
  let component: AppFamilyComponent;
  let fixture: ComponentFixture<AppFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
