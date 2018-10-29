import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDonationsComponent } from './app-donations.component';

describe('AppDonationsComponent', () => {
  let component: AppDonationsComponent;
  let fixture: ComponentFixture<AppDonationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDonationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
