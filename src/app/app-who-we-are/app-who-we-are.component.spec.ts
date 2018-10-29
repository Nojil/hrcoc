import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWhoWeAreComponent } from './app-who-we-are.component';

describe('AppWhoWeAreComponent', () => {
  let component: AppWhoWeAreComponent;
  let fixture: ComponentFixture<AppWhoWeAreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWhoWeAreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWhoWeAreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
