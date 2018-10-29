import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppImpactComponent } from './app-impact.component';

describe('AppImpactComponent', () => {
  let component: AppImpactComponent;
  let fixture: ComponentFixture<AppImpactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppImpactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
