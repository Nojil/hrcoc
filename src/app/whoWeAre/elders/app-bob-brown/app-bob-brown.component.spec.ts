import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBobBrownComponent } from './app-bob-brown.component';

describe('AppBobBrownComponent', () => {
  let component: AppBobBrownComponent;
  let fixture: ComponentFixture<AppBobBrownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBobBrownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBobBrownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
