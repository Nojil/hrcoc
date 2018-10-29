import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStudyComponent } from './app-study.component';

describe('AppStudyComponent', () => {
  let component: AppStudyComponent;
  let fixture: ComponentFixture<AppStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
