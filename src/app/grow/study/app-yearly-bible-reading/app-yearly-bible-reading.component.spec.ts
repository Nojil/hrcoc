import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppYearlyBibleReadingComponent } from './app-yearly-bible-reading.component';

describe('AppYearlyBibleReadingComponent', () => {
  let component: AppYearlyBibleReadingComponent;
  let fixture: ComponentFixture<AppYearlyBibleReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppYearlyBibleReadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppYearlyBibleReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
