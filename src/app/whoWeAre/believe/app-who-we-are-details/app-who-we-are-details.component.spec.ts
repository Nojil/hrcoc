import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWhoWeAreDetailsComponent } from './app-who-we-are-details.component';

describe('AppWhoWeAreDetailsComponent', () => {
  let component: AppWhoWeAreDetailsComponent;
  let fixture: ComponentFixture<AppWhoWeAreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWhoWeAreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWhoWeAreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
