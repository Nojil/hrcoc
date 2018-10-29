import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdultsComponent } from './app-adults.component';

describe('AppAdultsComponent', () => {
  let component: AppAdultsComponent;
  let fixture: ComponentFixture<AppAdultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAdultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
