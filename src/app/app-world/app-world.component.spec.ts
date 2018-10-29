import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWorldComponent } from './app-world.component';

describe('AppWorldComponent', () => {
  let component: AppWorldComponent;
  let fixture: ComponentFixture<AppWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
