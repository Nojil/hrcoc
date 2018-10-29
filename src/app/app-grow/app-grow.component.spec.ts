import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGrowComponent } from './app-grow.component';

describe('AppGrowComponent', () => {
  let component: AppGrowComponent;
  let fixture: ComponentFixture<AppGrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppGrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
