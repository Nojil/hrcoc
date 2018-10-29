import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLambComponent } from './app-lamb.component';

describe('AppLambComponent', () => {
  let component: AppLambComponent;
  let fixture: ComponentFixture<AppLambComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLambComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLambComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
