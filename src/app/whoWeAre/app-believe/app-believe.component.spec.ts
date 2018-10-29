import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBelieveComponent } from './app-believe.component';

describe('AppBelieveComponent', () => {
  let component: AppBelieveComponent;
  let fixture: ComponentFixture<AppBelieveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBelieveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBelieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
