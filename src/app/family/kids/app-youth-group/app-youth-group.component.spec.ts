import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppYouthGroupComponent } from './app-youth-group.component';

describe('AppYouthGroupComponent', () => {
  let component: AppYouthGroupComponent;
  let fixture: ComponentFixture<AppYouthGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppYouthGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppYouthGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
