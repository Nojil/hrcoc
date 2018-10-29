import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMissionsComponent } from './app-missions.component';

describe('AppMissionsComponent', () => {
  let component: AppMissionsComponent;
  let fixture: ComponentFixture<AppMissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
