import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCommunityOutreachComponent } from './app-community-outreach.component';

describe('AppCommunityOutreachComponent', () => {
  let component: AppCommunityOutreachComponent;
  let fixture: ComponentFixture<AppCommunityOutreachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCommunityOutreachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCommunityOutreachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
