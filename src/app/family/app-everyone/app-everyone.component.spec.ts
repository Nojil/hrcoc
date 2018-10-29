import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEveryoneComponent } from './app-everyone.component';

describe('AppEveryoneComponent', () => {
  let component: AppEveryoneComponent;
  let fixture: ComponentFixture<AppEveryoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppEveryoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEveryoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
