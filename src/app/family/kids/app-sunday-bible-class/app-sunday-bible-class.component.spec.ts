import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSundayBibleClassComponent } from './app-sunday-bible-class.component';

describe('AppSundayBibleClassComponent', () => {
  let component: AppSundayBibleClassComponent;
  let fixture: ComponentFixture<AppSundayBibleClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSundayBibleClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSundayBibleClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
