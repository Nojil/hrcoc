import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSermonFollowUpComponent } from './app-sermon-follow-up.component';

describe('AppSermonFollowUpComponent', () => {
  let component: AppSermonFollowUpComponent;
  let fixture: ComponentFixture<AppSermonFollowUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSermonFollowUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSermonFollowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
