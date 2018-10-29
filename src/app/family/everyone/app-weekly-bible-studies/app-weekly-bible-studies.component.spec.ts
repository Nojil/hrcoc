import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWeeklyBibleStudiesComponent } from './app-weekly-bible-studies.component';

describe('AppWeeklyBibleStudiesComponent', () => {
  let component: AppWeeklyBibleStudiesComponent;
  let fixture: ComponentFixture<AppWeeklyBibleStudiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWeeklyBibleStudiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWeeklyBibleStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
