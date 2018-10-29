import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBiblicalCommunionComponent } from './app-biblical-communion.component';

describe('AppBiblicalCommunionComponent', () => {
  let component: AppBiblicalCommunionComponent;
  let fixture: ComponentFixture<AppBiblicalCommunionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBiblicalCommunionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBiblicalCommunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
