import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppVbsComponent } from './app-vbs.component';

describe('AppVbsComponent', () => {
  let component: AppVbsComponent;
  let fixture: ComponentFixture<AppVbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppVbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppVbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
