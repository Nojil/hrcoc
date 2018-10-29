import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNewsletterComponent } from './app-newsletter.component';

describe('AppNewsletterComponent', () => {
  let component: AppNewsletterComponent;
  let fixture: ComponentFixture<AppNewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNewsletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
