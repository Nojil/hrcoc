import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWeeklyCommunionComponent } from './app-weekly-communion.component';

describe('AppWeeklyCommunionComponent', () => {
  let component: AppWeeklyCommunionComponent;
  let fixture: ComponentFixture<AppWeeklyCommunionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWeeklyCommunionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWeeklyCommunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
