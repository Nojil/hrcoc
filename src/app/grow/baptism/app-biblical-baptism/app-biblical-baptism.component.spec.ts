import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBiblicalBaptismComponent } from './app-biblical-baptism.component';

describe('AppBiblicalBaptismComponent', () => {
  let component: AppBiblicalBaptismComponent;
  let fixture: ComponentFixture<AppBiblicalBaptismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBiblicalBaptismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBiblicalBaptismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
