import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGivingComponent } from './app-giving.component';

describe('AppGivingComponent', () => {
  let component: AppGivingComponent;
  let fixture: ComponentFixture<AppGivingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppGivingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
