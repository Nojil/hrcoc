import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBillFreemenComponent } from './app-bill-freemen.component';

describe('AppBillFreemenComponent', () => {
  let component: AppBillFreemenComponent;
  let fixture: ComponentFixture<AppBillFreemenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBillFreemenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBillFreemenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
