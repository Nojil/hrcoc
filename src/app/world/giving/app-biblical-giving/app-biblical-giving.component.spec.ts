import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBiblicalGivingComponent } from './app-biblical-giving.component';

describe('AppBiblicalGivingComponent', () => {
  let component: AppBiblicalGivingComponent;
  let fixture: ComponentFixture<AppBiblicalGivingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBiblicalGivingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBiblicalGivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
