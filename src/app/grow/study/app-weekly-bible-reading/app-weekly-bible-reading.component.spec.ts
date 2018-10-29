import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWeeklyBibleReadingComponent } from './app-weekly-bible-reading.component';

describe('AppWeeklyBibleReadingComponent', () => {
  let component: AppWeeklyBibleReadingComponent;
  let fixture: ComponentFixture<AppWeeklyBibleReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWeeklyBibleReadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWeeklyBibleReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
