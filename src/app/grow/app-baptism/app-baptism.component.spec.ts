import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBaptismComponent } from './app-baptism.component';

describe('AppBaptismComponent', () => {
  let component: AppBaptismComponent;
  let fixture: ComponentFixture<AppBaptismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBaptismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBaptismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
