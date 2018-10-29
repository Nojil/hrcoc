import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdultWeeklyBibleStudiesComponent } from './app-adult-weekly-bible-studies.component';

describe('AppWeeklyBibleStudiesComponent', () => {
  let component: AppAdultWeeklyBibleStudiesComponent;
  let fixture: ComponentFixture<AppAdultWeeklyBibleStudiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAdultWeeklyBibleStudiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdultWeeklyBibleStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
