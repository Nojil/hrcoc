import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppYouthOutreachComponent } from './app-youth-outreach.component';

describe('AppYouthOutreachComponent', () => {
  let component: AppYouthOutreachComponent;
  let fixture: ComponentFixture<AppYouthOutreachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppYouthOutreachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppYouthOutreachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
