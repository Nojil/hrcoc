import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSofComponent } from './app-sof.component';

describe('AppSofComponent', () => {
  let component: AppSofComponent;
  let fixture: ComponentFixture<AppSofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
