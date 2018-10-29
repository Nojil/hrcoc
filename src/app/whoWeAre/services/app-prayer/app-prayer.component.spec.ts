import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPrayerComponent } from './app-prayer.component';

describe('AppPrayerComponent', () => {
  let component: AppPrayerComponent;
  let fixture: ComponentFixture<AppPrayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPrayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPrayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
